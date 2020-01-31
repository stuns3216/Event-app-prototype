import React, { Component } from "react";
import axios from "axios";

class Events extends Component {
  state = {
    eventname: "",
    eventplace: "",
    eventdate: "",
    eventprice: 0
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addevent = () => {
    axios.post("http://localhost:5000/event/", {
              eventname: this.state.eventname,
              eventplace: this.state.eventplace,
              eventdate: this.state.eventdate,
              eventprice: this.state.eventprice
            });
  }


  render() {
    return (
      <div style={{ marginTop: "300px" }}>
        <input
          type="text"
          placeholder="type the event name"
          name="eventname"
          onChange={e => this.handleChange(e)}
        />
        <input
          type="text"
          placeholder="type the event place"
          name="eventplace"
          onChange={e => this.handleChange(e)}
        />
        <input
          type="text"
          placeholder="type the event date"
          name="eventdate"
          onChange={e => this.handleChange(e)}
        />
        <input
          type="number"
          placeholder="type the event price"
          name="eventprice"
          onChange={e => this.handleChange(e)}
        />
        <button
          onClick={() => {
            this.addevent()
          }}
        >
          Add Event
        </button>
      </div>
    );
  }
}
export default Events;
