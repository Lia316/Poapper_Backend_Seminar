import React, { Component } from 'react'
import axios from "axios"
import './style.css'

class SelectLevel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            level: [
                { count: 1, sub: '권장 용량은 10칸입니다' },
                { count: 2, sub: '권장 용량은 20칸입니다' },
                { count: 3, sub: '권장 용량은 30칸입니다' },
                { count: 4, sub: '권장 용량은 40칸입니다' },
                { count: 5, sub: '권장 용량은 50칸입니다' }
            ],
            cards: []
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
        var level = ''
        for (var i = 0; i < cards.length; i++) {
            level += `${cards[i].word} : ${cards[i].mean}\n`
        }
        return level
    }

    render() {
        console.log('🔥', this.state.cards)
        var cards = this.state.cards
        var levels = []

        for (var i = 0; i < cards.length; i++) {
            levels.push(
                <button key={i} type="button" class="levelblock">{this.getLevelCards(i)}</button>)
                // <label key={cards[i].id}>
                //     <input type="radio" name="card" id={cards[i].id}></input>
                //     {cards[i].word}
                // </label>)
        }

        return (
            <article>
                {levels}
            </article>
        )
    }
}

export default SelectLevel