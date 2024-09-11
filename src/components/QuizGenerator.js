import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

module.exports = {
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      net: false,
      tls: false,
      crypto: false,
      dns: false,
    },
  },
};

class QuizGenerator extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const url = 'https://trivia-questions-api.p.rapidapi.com/fetchCategories';
    const config = {
      headers: {
        'x-rapidapi-key': '29c602aad3msh0494b6c92477117p1434dajsn2e6329db8deb',
        'x-rapidapi-host': 'trivia-questions-api.p.rapidapi.com'
      }
    };

    axios.get(url, config)
      .then(response => {
        const data = response.data;
        console.log(data);
        this.setState({
          categories: data,
          loading: false,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {this.state.categories.map((category, index) => (
          <div key={index}>
            <h2>{category}</h2>
          </div>
        ))}
      </div>
    );
  }
}

const quizGenerator = new QuizGenerator();

ReactDOM.render(
  <React.StrictMode>
    <quizGenerator />
  </React.StrictMode>,
  document.getElementById('root')
);

export default QuizGenerator;