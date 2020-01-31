import React from "react";
import { Modal, Button } from "antd";
import axios from "axios"

class ModalExample extends React.Component {
  state = {
    visible: false,
    eventname: this.props.eventname,
    eventplace:this.props.eventplace,
    eventdate: this.props.eventdate,
    eventprice:this.props.eventprices

  }; 

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("this is the state: "+ this.state.eventname)
  };


  showModal = () => {
    this.setState({
      visible: true
    });
  };
 
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  editEvent = (e) => {
    console.log("new state:",this.state)
    console.log("the id is:",this.props.eventid)
    axios.put(`http://localhost:5000/event/${this.props.eventid}`, {
              eventname: this.state.eventname,
              eventplace: this.state.eventplace,
              eventdate: this.state.eventdate,
              eventprice: this.state.eventprice
            })
            .then(res => console.log("OK"))
            .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Edit event
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ marginTop: "300px" }}>
            <input
            value={this.state.eventname}
              
              type="text"
              placeholder="type the event name"
              name="eventname"
              onChange={(e)=> this.handleChange(e)}
            />
            <input
            value={this.state.eventplace}
              type="text"
              placeholder="type the event place"
              name="eventplace"
              onChange={e => this.handleChange(e)}
            />
            <input
            value={this.state.eventdate}
              type="text"
              placeholder="type the event date"
              name="eventdate"
              onChange={e => this.handleChange(e)}
            />
            <input
              value={this.state.eventprice}
              type="number"
              placeholder="type the event price"
              name="eventprice"
              onChange={e => this.handleChange(e)}
            />
            <button onClick={(e)=>this.editEvent(e)}>confirm changes</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
