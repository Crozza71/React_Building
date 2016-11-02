import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
// import Event from './Event';
import EventList from './EventList';


var URL = require("./Data.js")
// https://maps.googleapis.com/maps/api/js?key=IzaSyAAddTPjnqKBwat6Kk8oQt-WTQVxTws2Js&callback=initMap"



class App extends Component {
  constructor(){
    super();
      this.state={
        value:null
      };
    }
      componentWillMount() {

     }

     
  
  render() {
    
    return (
      <div className="App">
        <Header/>
        <EventList/>
         <Footer/>
      </div>
    );
  }
}



// fetchDemo(){
//   fetch(URL).then(function(response){
//     console.log(response.json());
//   }).then(function(json){
    
//     console.log(json)
//   });
// }

// fetchDemo();







export default App;


