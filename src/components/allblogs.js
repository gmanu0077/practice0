import React, { Component } from 'react';
import Card from './blogcard'
import axios from 'axios'

class Blog extends Component {
  state={
      blog:[],
      title:"",
      id:""
  }
  componentDidMount() {
    axios.get('http://localhost:5000/blog/')
      .then(response => {
        console.log(response)
        console.log(response.data)
        this.setState({
          blog:response.data

        })

       
      })
  }
full=(id)=>{
 
      this.props.history.push("/blog",id) ; 
    
 }

  
    

 


 
  render() {
    console.log(this.state,"hi")

    return (
      <div>
        <div className="main container">
          <h1 className="center brown  white-text">BLOGS</h1>
            
        </div>

        <Card blogs={this.state.blog} full={this.full} />

         

      </div>




    )
  }
}

export default Blog;
