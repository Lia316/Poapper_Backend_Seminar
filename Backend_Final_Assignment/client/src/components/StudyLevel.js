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
            cards: []
        }
    }

    async getData(id) {
        try {
            await axios.get(`/study/level/${id}`)
                .then((res) => {
                    console.log('💦', res.data)
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

    render() {
        const id = this.state.id
        console.log(id)
        return (
            <article>
                <Subtitle
                    title={this.state.subtitle[id].title}
                    sub={this.state.subtitle[id].sub}>
                </Subtitle>

            </article>
        )
    }
}

export default withRouter(StudyLevel)