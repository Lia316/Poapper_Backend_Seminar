import React, { Component } from 'react'
import axios from "axios"
import Subtitle from "./Subtitle"
import CardsCheck from "./CardsCheck"

class DeleteCard extends Component {
    async getData() {
        try {
            await axios.get('/study')
                .then((res) => {
                    return res.data
                })
        } catch (error) {
            console.error(error)
        }
    }
    
    constructor(props) {
        super(props)

        this.state = { 
            subtitle: { title: 'Delete', sub: '카드를 선택하고 삭제할 수 있습니다.' },
            cards: []
        }
    }

    componentDidMount() {
        axios.get('/study')
            .then((res) => {
                this.setState({cards: res.data})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <article>
                <Subtitle
                    title={this.state.subtitle.title}
                    sub={this.state.subtitle.sub}>
                </Subtitle>

                <CardsCheck 
                    cards = { this.state.cards }
                    onSubmit = { function (id) {
                        axios.delete(`/study/${id}`)
                        .then((res) => console.log(res.status))
                        .catch((error) => console.log(error))
                    }}>
                </CardsCheck>
            </article>
        )
    }
}

export default DeleteCard