import React, { Component } from "react";
import Modal from '../../components/modal/modal'
import axios from "axios";
class Listevents extends Component {
  state = {
    events: [],



  };

  getEvent = () => {
    axios.get("http://localhost:5000/event/").then(res => {
      this.setState({ events: res.data });
    });
   
  };

  deleteEvent = index => {
    axios
      .delete(`http://localhost:5000/event/${index}`)
      .then(res => console.log("elt deleted"))
      .catch(err => console.log(err));
      this.getEvent();
  };

  componentDidMount = () => {
    this.getEvent();
  };
 



  render() {
    return (
      <div className="container-card" style={{ marginTop: "500px" }}>
        hello my events
        <button style={{ height: "250px" }} onClick={() => this.getEvent()}>
          hell
        </button>
        <div className="card" style={{ border: "1px solid black" }}>
          {this.state.events.map((el, i) => (
            <div>
              <Modal 
              eventname={el.eventname}
              eventplace={el.eventplace}
              eventdate={el.eventdate}
              eventprice={el.eventprice}
              eventid={el._id}
              onClick={e => this.editEvent()} />
              <p>{el.eventname}</p>
              <button onClick={e => this.deleteEvent(el._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Listevents;
