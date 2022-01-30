import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import './style.css'

class SelectLevel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            colors: ["blue", "green", "yellow", "cyan", "purple"]
        }
    }

    async getData() {
        try {
            for (var i = 1; i <= 5; i++) {
                await axios.get(`/study/${i}`)
                    .then((res) => {
                        console.log("😵", res.data)
                        var ncards = this.state.cards
                        ncards.push(res.data)
                        this.setState({ cards: ncards })
                    })
            }
        } catch (error) {
            console.error(error)
        }
    }

    componentDidMount() {
        this.getData()
    }

    getLevelCards(id) {
        var cards = this.state.cards[id]
        var level = []
        for (var i = 0; i < cards.length; i++) {
            level.push(<li key={i} class="list">{cards[i].word} : {cards[i].mean}</li>)
        }
        return level
    }

    render() {
        var cards = this.state.cards
        var levels = []

        for (var i = 0; i < cards.length; i++) {
            levels.push(
                <div>
                    <Link to={'/study/level/'+(i+1)} class={"btn-3d "+this.state.colors[i]}>level {i+1}</Link>
                    <ol class="wordList">{this.getLevelCards(i)}</ol>
                </div>)
        }

        return (
            <div>
                <desc>
                    <h3>학습할 단계를 선택하세요</h3>
                </desc>
                <article class="levelSelection">
                    {levels}
                </article>
            </div>
        )
    }
}

export default SelectLevel