import React, { Component } from 'react'
import axios from "axios"
import Subject from "./components/Subject"
import CreateCard from "./components/CreateCard.js"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subject: { title: '기억상자', sub: '라이트너 암기법을 활용한 단어 학습 웹페이지' },
    }
  }

  render() {
    return (
      <div className = "App">
        <Subject
          title = {this.state.subject.title}
          sub = {this.state.subject.sub}>
        </Subject>

        <CreateCard onSubmit = { function (word, mean) {
          axios.post("/study", {
            word: word,
            mean: mean,
            level: 1
          })
          .then((res) => console.log(res.status))

          this.setState({
            sub: 'created!'
          })
        }.bind(this)}>
        </CreateCard>
        
      </div>
    );
  }
}

export default App;
