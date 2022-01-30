import React, { Component } from 'react'
import Subtitle from "./Subtitle"

class CreateCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subtitle: { title: 'Create', sub: '새 카드를 생성해보세요!'
            }
        }
    }

    render() {
        return (
            <article>
                <Subtitle 
                    title={this.state.subtitle.title} 
                    sub={this.state.subtitle.sub}>
                </Subtitle>
                
                <form action = "/study" method = "post"
                    onSubmit = { function (e) {
                        e.preventDefault()
                        alert(`단어: ${e.target.word.value} \n의미: ${e.target.mean.value} \n\n생성 완료!`)
                        this.props.onSubmit(
                            e.target.word.value,
                            e.target.mean.value
                        )
                        }.bind(this)}>
                    <p><input type="text" name="word" placeholder="word"></input></p>
                    <p><input type="text" name="mean" placeholder="mean"></input></p>
                    <p><input type="submit"></input></p>
                </form>
            </article>
        )
    }
}

export default CreateCard