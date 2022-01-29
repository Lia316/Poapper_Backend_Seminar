import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TOC extends Component{
    render(){     
      var lists = []
      var data = this.props.data
      
      for(var i = 0; i < data.length; i++){
        lists.push(
          <li key = { data[i].id }>
            <Link to = {'/' + data[i].mode}>{data[i].title}</Link>
          </li>);
      }
      return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
      )
    }
  }

export default TOC