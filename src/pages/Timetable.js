import React, { Component } from "react";
import Header from "../components/Header";
import { auth, db } from "../services/firebase";
import { Link } from "react-router-dom";

export default class Timetable extends Component {
  constructor() {
    super();
    this.state = {
      user: auth().currentUser,
      timetables: [],
      content: "",
      time: "",
      type: "",
      timetable: {}
    };
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.createtimetable = this.createtimetable.bind(this);
    this.edittimetable = this.edittimetable.bind(this);
  }

  componentDidMount() {
    db.ref(`all_timetables/${this.state.user.uid}`).on("value", snapshot => {
      let alltimetables = [];
      snapshot.forEach(snap => {
        alltimetables.push(snap.val());
      });
      console.log(alltimetables);
      this.setState({ timetables: alltimetables });
    });
  }

  handleChangeContent(e) {
    this.setState({
      content: e.target.value
    });
  }
  handleChangeTime(e) {
    this.setState({
      time: e.target.value
    });
  }
  handleChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  createtimetable() {
    const uid = this.state.user.uid;
    const { content } = this.state;
    const { time } = this.state;
    const { type } = this.state;
    const timetable = this.state.timetable;
    if (timetable && timetable.content) {
      return db
        .ref(`all_timetables/${uid}/${timetable.timetable_id}`)
        .update({
          content,
          time,
          type,
          uid
        })
        .then(_ => {
          this.setState({ content: "", time: "", type: "", timetable: {} });
        })
        .catch(error => console.log(error.message));
    }
    const timetable_id = `timetable-${Date.now()}`;
    db.ref(`all_timetables/${uid}/${timetable_id}`)
      .set({
        content,
        time,
        type,
        timetable_id,
        uid
      })
      .then(_ => {
        this.setState({ content: "", time: "", type: "", timetable: {} });
      })
      .catch(error => console.log(error.message));
  }

  edittimetable(timetable_id) {
    db.ref(`all_timetables/${this.state.user.uid}/${timetable_id}`)
      .once("value")
      .then(snapshot => {
        this.setState({
          timetable: snapshot.val(),
          content: snapshot.val().content,
          time: snapshot.val().time,
          type: snapshot.val().type
        });
      });
  }

  deletetimetable(timetable_id) {
    db.ref(`all_timetables/${this.state.user.uid}/${timetable_id}`).remove();
  }

  render() {
    return (
      <div>
        <Header />
        <h2> Timetable </h2>
        <Link to="/assignment" className="b"><button> Assignments </button></Link>          
        {this.state.timetables.map(timetable => {
          return (
            <div key={timetable.timetable_id} className="card card-body shadow-sm m-4">
              <p>{timetable.content}</p>
              <p>{timetable.time}</p>
              <p>{timetable.type}</p>
              <button
                className="btn btn-sm text-info"
                onClick={() => this.edittimetable(timetable.timetable_id)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm text-danger"
                onClick={() => this.deletetimetable(timetable.timetable_id)}
              >
                Delete
              </button>
            </div>
          );
        })}
        <div className="form-group mx-4">
          <input
            className="form-control"
            placeholder="title"
            onChange={this.handleChangeContent}
            value={this.state.content}
          />
        <input
            className="form-control"
            placeholder="time"
            onChange={this.handleChangeTime}
            value={this.state.time}
          />
                    <input
            className="form-control"
            placeholder="type"
            onChange={this.handleChangeType}
            value={this.state.type}
          />
          <button className="btn btn-success mt-3" onClick={this.createtimetable}>
            Create timetable
          </button>
        </div>
      </div>
    );
  }
}
