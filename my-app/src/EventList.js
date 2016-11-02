import React, { Component } from 'react';
import Event from "./Event";
import Listings from './Data';



class EventList extends Component {
  render (){
    fetch(Listings)  
      .then(function(response) {
        console.log(response.json())
      });
  
    return (
      <div className="event">
        {
          Listings.map(function(event, index){
            return <Event key={"Event-" + index} name={event.name} desc={event.desc} participants={event.participants}
            status={event.status}/>
          })
        }
        </div>

      )
    }
};


  
EventList.contextTypes = {
  router:React.PropTypes.object
}


export default EventList;



