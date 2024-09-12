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
      type: 'boolean',
      fetched: false
    };
  }

  componentDidMount() {
    if (!this.state.fetched) {
      this.fetchQuestions();
      this.setState({ fetched: true });
    }
  }

  fetchQuestions = async () => {
    const url = 'https://opentdb.com/api.php';
    const params = {
      amount: this.state.amount,
      category: '31',
      type: this.state.type
    };
  
    axios.get(url, { params })
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
      })
      .finally(() => {
        this.setState({ loading: false }); // Set loading to false regardless of the request outcome
      });
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    console.log('Questions:', this.state.questions);
    return (
      <div>
        <h3 className='Questions-Heading'>Questions</h3>
        {this.state.questions.map((question, index) => {
          console.log('Question:', question);
          return (
            <div key={index}>
              <p className='Question'>{question.question}</p>
              <p>Answer: {question.correct_answer}</p>
              <p>Incorrect answers:
                <ul>
                  {question.incorrect_answers.map(answer => (
                    <li>{answer}</li>
                  ))}
                </ul>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}


export default QuizGenerator;