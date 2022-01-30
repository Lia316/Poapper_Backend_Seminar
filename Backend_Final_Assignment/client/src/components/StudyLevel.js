import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import axios from "axios"
import Subtitle from "./Subtitle"

class StudyLevel extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            subtitle: [0,
                { title: '1단계', sub: '권장 카드 수는 10장입니다' },
                { title: '2단계', sub: '권장 카드 수는 20장입니다' },
                { title: '3단계', sub: '권장 카드 수는 30장입니다' },
                { title: '4단계', sub: '권장 카드 수는 40장입니다' },
                { title: '5단계', sub: '권장 카드 수는 50장입니다' },
        ],
            id: 0,
            openCard: "시작!",
            cardIndex: 0,
            cards: []
        }
    }

    async getData(id) {
        try {
            await axios.get(`/study/level/${id}`)
                .then((res) => {
                    this.setState({ cards: res.data })
                })
        } catch (error) {
            console.error(error)
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.setState({ id: id })
        this.getData(id)
    }

    changeBtnName(e) {
        e.preventDefault()
        const idx = this.state.cardIndex
        const card = this.state.cards[idx]
        this.setState({ openCard: this.state.openCard === card.word ? card.mean : card.word })
    }

    decNum(e) {
        e.preventDefault()
        let index = this.state.cardIndex
        let cardNum = this.state.cards.length - 1

        if (index < cardNum) {
            index += 1
            this.setState({ cardIndex: index})
            this.setState({ openCard: this.state.cards[index].word })
        } else {
            alert("학습을 완료하셨습니다")
        }
    }

    render() {
        const id = this.state.id
        console.log(id)
        return (
            <article>
                <Subtitle
                    title={this.state.subtitle[id].title}
                    sub={this.state.subtitle[id].sub}>
                </Subtitle>

                <form onSubmit = {this.changeBtnName.bind(this)}>
                    <button type="submit" class='openCardButton'>{this.state.openCard}</button>
                </form>
                <form onSubmit={this.decNum.bind(this)} class='submitButton'>
                    <button type="submit" id='check' class="btn cyan small">다시</button>
                </form>
                <form onSubmit={this.decNum.bind(this)} class='submitButton'>
                    <button type="submit" id='reset' class="btn green small">확인</button>
                </form>
            </article>
        )
    }
}

export default withRouter(StudyLevel)