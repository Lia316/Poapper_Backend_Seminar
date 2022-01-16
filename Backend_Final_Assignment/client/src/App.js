import React, { Component } from 'react'
import axios from "axios"
import Title from "./components/Title"
import Subtitle from "./components/Subtitle"
import TOC from './components/TOC'
import CreateCard from "./components/CreateCard.js"
import DeleteCard from "./components/DeleteCard.js"
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mode: 'home',
      title: { title: '기억상자', sub: '라이트너 암기법을 활용한 단어 학습 웹페이지' },
      subtitle: { title: 'Home', sub: '환영합니다!' },
      selected_content_id: 0,
      contents: [
        { id: 1, title: 'Create Card'},
        { id: 2, title: 'Delete Card'},
        { id: 3, title: 'Study with Card'}
      ]
    }
  }

  getContentMode(id) {
    var dic = { 0: 'home', 1: 'create', 2: 'delete', 3: 'study'}
    return dic[Number(id)]
  }

  getContent() {
    var article = null

    if (this.state.mode === 'home') {
      article = <Subtitle
        title = { this.state.subtitle.title }
        sub = { this.state.subtitle.sub }>
      </Subtitle>
    }
    
    else if (this.state.mode === 'create') {
      article = <CreateCard onSubmit = { function (word, mean) {
        axios.post("/study", {
          word: word,
          mean: mean,
          level: 1
        })
        .then((res) => console.log(res.status))
      }}>
      </CreateCard>
    }

    else if (this.state.mode === 'delete') {
      article = <DeleteCard></DeleteCard>
    }

    return article
  }

  render() {
    return (
      <div className = "App">
        <Title
          title = { this.state.title.title }
          sub = { this.state.title.sub }
          onChangePage = { function () {
            this.setState({ mode: 'home' });
          }.bind(this)}>
        </Title>

        <TOC 
          onChangePage = { function (id) {
            var mode = this.getContentMode(id)
            this.setState({
              mode: mode
            })
          }.bind(this)}
          data = { this.state.contents }>
        </TOC>

        { this.getContent() }
        
      </div>
    )
  }
}

export default App
