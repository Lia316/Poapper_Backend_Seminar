import React, { Component } from 'react'

class CardsCheck extends Component {
    getCheckedId() {
        for (var i = 1; i <= this.props.cards.length; i++) {
            var card = document.getElementsByName("card")[i]
            if (card.checked == true) {
                return card.id
            }
        }
        // console.log("💦", $("select[name=card]").val())
    }
    
    render() {
        var cards = this.props.cards
        var lists = []
        
        for (var i = 0; i < cards.length; i++) {
            lists.push(
                <label key={cards[i].id}>
                    <input type = "radio" name="card" id = {cards[i].id}></input>
                    {cards[i].word}
                </label>)
        }

        return (
            <article> 
                <ul>
                    {lists}
                </ul>           
                
                <form action = "/study" method = "delete"
                    onSubmit = { function (e) {
                        e.preventDefault()
                        console.log("🥺", this.getCheckedId())

                        this.props.onSubmit(
                            this.getCheckedId()
                        )
                        }.bind(this)}>
                    <input type="hidden" name="id" value="1"></input> 
                    <p><input type="submit" value="삭제"></input></p>
                </form>
            </article>
        )
    }
}

export default CardsCheck