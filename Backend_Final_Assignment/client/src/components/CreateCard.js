import React, { Component } from 'react';

class CreateCard extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form action="/card" method="post"
                    onSubmit={function (e) {
                        e.preventDefault()
                        this.props.onSubmit(
                            e.target.word.value,
                            e.target.mean.value
                        )}.bind(this)}>
                    <p><input type="text" name="word" placeholder="word"></input></p>
                    <p><input type="text" name="mean" placeholder="mean"></input></p>
                    <p><input type="submit"></input></p>
                </form>
            </article>
        )
    }
}

export default CreateCard;