import React, { Component } from 'react'
import Subtitle from "./Subtitle"

class CreateCard extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            subtitle: { title: 'Delete', sub: '카드를 선택하고 삭제할 수 있습니다.' }
        }
    }

    render() {
        return (
            <article>
                <Subtitle
                    title={this.state.subtitle.title}
                    sub={this.state.subtitle.sub}>
                </Subtitle>

                <form action = "/study" method = "delete"
                    onSubmit = { function (e) {
                        e.preventDefault()
                        this.props.onSubmit(
                            e.target.word.value,
                            e.target.mean.value
                        )
                        }.bind(this)}>
                </form>
            </article>
        )
    }
}

export default CreateCard