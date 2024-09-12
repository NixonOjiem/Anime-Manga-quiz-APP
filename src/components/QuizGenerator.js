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
      fetched: false,
      userAnswers: {}, // new state to store user answers
      correctAnswers: {}, // new state to store correct answers
      showErrorPopup: false, // new state to manage pop-up visibility
      score: null // new state to store the score
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
            correctAnswers: data.results.reduce((acc, question, index) => {
              acc[index] = question.correct_answer;
              return acc;
            }, {}),
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

  handleAnswerChange = (index, answer) => {
    this.setState(prevState => ({
      userAnswers: { ...prevState.userAnswers, [index]: answer }
    }));
  };

  handleSubmit = () => {
    const userAnswers = this.state.userAnswers;
    const correctAnswers = this.state.correctAnswers;
    const score = Object.keys(userAnswers).reduce((acc, index) => {
      const userAnswerNormalized = userAnswers[index].toLowerCase();
      const correctAnswerNormalized = correctAnswers[index].toLowerCase();
      if (userAnswerNormalized === correctAnswerNormalized) {
        acc++;
      }
      console.log('User answers:', userAnswers);
      return acc;
    }, 0);
  
    // Check if all answers are either True or False (case-insensitive)
    const allAnswersValid = Object.values(userAnswers).every(answer => {
      const normalizedAnswer = answer.toLowerCase();
      return normalizedAnswer === 'true' || normalizedAnswer === 'false';
    });
  
    if (allAnswersValid) {
      this.setState({ score });
      console.log(`User scored ${score} out of ${this.state.amount}`);
      // You can also save the user's results to a database or local storage here
    } else {
      this.setState({ showErrorPopup: true });
      console.error('Error: Not all answers are either True or False');
    }
  }
  

  closePopup = () => {
    this.setState({ showErrorPopup: false });
  }
  
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
              <input
                type='text'
                value={this.state.userAnswers[index] || ''}
                onChange={e => this.handleAnswerChange(index, e.target.value)}
                placeholder='True or False'
                className='User-Answer-text'
              />
            </div>
          );
        })}
        <button onClick={this.handleSubmit}>Submit Answers</button>
        
        {this.state.score !== null && (
          <div className='score'>
            <h2>Your Score: {this.state.score} out of {this.state.amount}</h2>
          </div>
        )}
        
        {this.state.showErrorPopup && (
          <div className='popup'>
            <div className='popup-inner'>
              <h2>Error</h2>
              <p>Not all answers are either True or False.</p>
              <button onClick={this.closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default QuizGenerator;
