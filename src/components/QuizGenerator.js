import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class QuizGenerator extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      loading: true,
      amount: 12,
      type: 'boolean'
    };
  }

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = async () => {
    const url = 'https://opentdb.com/api.php';
    const config = {
      params: {
        amount: this.state.amount,
        type: this.state.type
      }
    };

    axios.get(url, config)
      .then(response => {
        const data = response.data;
        console.log('Response data:', data);
        if (data && data.results) {
          this.setState({
            questions: data.results,
            loading: false,
          });
        } else {
          console.error('Error: results property not found in response data');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
  
    console.log('Questions:', this.state.questions);
    return (
      <div>
        {this.state.questions.map((question, index) => {
          console.log('Question:', question); // Add this line
          return (
            <div key={index}>
              <p>{question.question}</p>
              <p>Answer: {question.correct_answer}</p>
              <p>Incorrect answers: {question.incorrect_answers.join(', ')}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <QuizGenerator />
  </React.StrictMode>,
  document.getElementById('root')
);

export default QuizGenerator;