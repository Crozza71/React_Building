import React, { Component } from 'react';
import Listings from './Data';

class Event extends Component {

  render () {
    console.log(Listings.length)
    console.log(this)
    

        return (
          <div className="event">
                   <h2 style={{color:"Green"}}>{this.props.name}</h2>
                   <h4 style={{color:"grey"}}>{this.props.participants}</h4>
                    <h4 style={{alignItems:"center"}}>{this.props.desc}</h4> 
                    <h4 style={{background:"red",fontFamily:"helvetica"}}>{this.props.status}</h4>
                  </div>       
              );
            }
          }





Event.contextTypes = {
  router:React.PropTypes.object
}
export default Event;




