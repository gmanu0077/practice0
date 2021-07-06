import React from 'react'

import './card.css'
 


const Card=({blogs,full})=>{
    
    const cards=blogs.length?( blogs.map(tt =>{ 
      
      
        
      
      
        return (
            <div className="row" key={tt._id}>
            
                <div className="col l4 s12 m6">
                    <div className=" cr card grey lighten-1   z-depth-3">
                        <div className="tit card-title center teal-text text-lighten-1"><h3 className="ti">{tt.Title} </h3></div>
                        <div className="card-content center"> 
                        <img className="responsive-img"  src={tt.img} height="100vw"   />
                        <br></br>
                        <div className="para">
                        <p>{tt.description}</p>
                        </div>
                            
                            
                          
                        </div>
                        
                        
                        <div className="card-action ">
                        <span  onClick={()=>{full(tt._id)}} className="btn large-btn text-grey right yellow  darken-3 pulse ">
                          Read More
                        </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
      })
    ):( <div className="container">
    <div className="container ">
    <div className="container">
    <h3 className="card #00e676 green accent-3 white-text  center">No Blogs</h3>
    </div>
    
    </div>
    
    </div>) 
    
    return(
        <div className="content">
         
            {cards}
           
        </div>
    )
}

export default Card;