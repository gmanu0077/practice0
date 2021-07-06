import React, { Component } from 'react';

import axios from 'axios'

class FBlog extends Component {
  state={
      blog:[],
      title:""
  }
  componentDidMount() {
    
    axios.get('http://localhost:5000/blog/'+this.props.history.location.state)
      .then(response => {
    
        this.setState({
          blog:response.data

        })
   
       
      })
      
  }

componentDidUpdate(){
    axios.get('http://localhost:5000/blog/'+this.props.history.location.state)
    .then(response => {
  
      this.setState({
        blog:response.data

      })
 
     
    })
}
  
    

 


 
  render() {
    console.log(this.props.history)
    console.log(this.state)

    return (
      <div>
        <div className="main container">
          <span onClick={()=>{this.props.history.push('/')}} className=" right btn">Go back</span>
          <div className="row" >
            
            <div className="col l12 s12 m12">
                <div className="card grey lighten-1   z-depth-3">
                    <div className="tit card-title center teal-text text-lighten-1"><h3 className="ti">{this.state.blog.Title} </h3></div>
                    <div className="card-content center"> 
                    <img className="responsive-img"  src={this.state.blog.img} />
                    <br></br>
                    <p>{this.state.blog.description}</p>
                    
                        
                        
                      
                    </div>
                    
                    
                    <div className="card-action ">
                     <span onClick={()=>{this.props.history.push('/editblog',this.props.history.location.state)}} className="btn right  orange">Edit</span>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

       

         

      </div>




    )
  }
}

export default FBlog;
