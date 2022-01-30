import './App.css'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from "axios"
import Title from "./components/Title"
import Subtitle from "./components/Subtitle"
import TOC from './components/TOC'
import CreateCard from "./components/CreateCard.js"
import DeleteCard from "./components/DeleteCard.js"
import SelectLevel from "./components/SelectLevel.js"
import StudyLevel from "./components/StudyLevel.js"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mode: 'home',
      title: { title: '기억상자', sub: '라이트너 암기법을 활용한 단어 학습 웹페이지' },
      subtitle: { title: 'Home', sub: '환영합니다!' },
      selected_content_id: 0,
      contents: [
        { id: 1, mode: 'create', title: 'Create Card'},
        { id: 2, mode: 'delete', title: 'Delete Card'},
        { id: 3, mode: 'study', title: 'Study with Card'}
      ]
    }
  }


  render() {
    return (
      <div className = "App">
        <Title
          title = { this.state.title.title }
          sub = { this.state.title.sub }>
        </Title>

        <TOC 
          data = { this.state.contents }>
        </TOC>
                
        <Route exact path = '/'>
           <Subtitle
            title={this.state.subtitle.title}
            sub={this.state.subtitle.sub}>
          </Subtitle>
        </Route>
        <Route path = '/create'>
            <CreateCard onSubmit={function (word, mean) {
              axios.post("/study", {
                word: word,
                mean: mean,
                level: 1
              })
                .then((res) => console.log(res.status))
            }}>
            </CreateCard>
        </Route>
        <Route path = '/delete'>
          <DeleteCard></DeleteCard>
        </Route>
        <Route exact path='/study'>
          <SelectLevel></SelectLevel>
        </Route>
        <Route path='/study/level/:id'>
          <StudyLevel onSubmit={function (id, nextLv) {
            axios.post("/study/level", {
              id: id,
              nextLv: nextLv
            })
              .then((res) => console.log(res.status))
          }}></StudyLevel>
        </Route>
      </div>
    )
  }
}

export default App
