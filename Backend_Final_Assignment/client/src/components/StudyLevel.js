import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import axios from "axios"
import Subtitle from "./Subtitle"

class StudyLevel extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            subtitle: { title: '1단계', sub: '권장 카드 수는 10장입니다' },
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
        this.getData(id)
    }

    render() {
        return (
            <article>
                <Subtitle
                    title={this.state.subtitle.title}
                    sub={this.state.subtitle.sub}>
                </Subtitle>

            </article>
        )
    }
}

export default withRouter(StudyLevel)