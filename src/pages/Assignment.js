import React, { Component } from "react";
import Header from "../components/Header";
import { auth, db } from "../services/firebase";
import { Link } from "react-router-dom";

export default class Assignment extends Component {
  constructor() {
    super();
    this.state = {
      user: auth().currentUser,
      assignments: [],
      content: "",
      due: "",
      complete: "",
      assignment: {}
    };
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleChangeDue = this.handleChangeDue.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.createassignment = this.createassignment.bind(this);
    this.editassignment = this.editassignment.bind(this);
  }

  componentDidMount() {
    db.ref(`all_assignments/${this.state.user.uid}`).on("value", snapshot => {
      let allassignments = [];
      snapshot.forEach(snap => {
        allassignments.push(snap.val());
      });
      console.log(allassignments);
      this.setState({ assignments: allassignments });
    });
  }

  handleChangeContent(e) {
    this.setState({
      content: e.target.value
    });
  }
  handleChangeDue(e) {
    this.setState({
      due: e.target.value
    });
  }
  handleChangeComplete(e) {
    this.setState({
      complete: e.target.value
    });
  }

  createassignment() {
    const uid = this.state.user.uid;
    const { content } = this.state;
    const { due } = this.state;
    const { complete } = this.state;
    const assignment = this.state.assignment;
    if (assignment && assignment.content) {
      return db
        .ref(`all_assignments/${uid}/${assignment.assignment_id}`)
        .update({
          content,
          due,
          complete,
          uid
        })
        .then(_ => {
          this.setState({ content: "", due: "", complete: "", assignment: {} });
        })
        .catch(error => console.log(error.message));
    }
    const assignment_id = `assignment-${Date.now()}`;
    db.ref(`all_assignments/${uid}/${assignment_id}`)
      .set({
        content,
        due,
        complete,
        assignment_id,
        uid
      })
      .then(_ => {
        this.setState({ content: "", due: "", complete: "", assignment: {} });
      })
      .catch(error => console.log(error.message));
  }

  editassignment(assignment_id) {
    db.ref(`all_assignments/${this.state.user.uid}/${assignment_id}`)
      .once("value")
      .then(snapshot => {
        this.setState({
          assignment: snapshot.val(),
          content: snapshot.val().content,
          due: snapshot.val().due,
          complete: snapshot.val().complete
        });
      });
  }

  deleteassignment(assignment_id) {
    db.ref(`all_assignments/${this.state.user.uid}/${assignment_id}`).remove();
  }

  render() {
    return (
      <div>
        <Header />
        <h2> Notes </h2>
        <Link to="/timetable" className="b"><button> Timetable </button></Link> 
        {this.state.assignments.map(assignment => {
          return (
            <div key={assignment.assignment_id} className="card card-body shadow-sm m-4">
              <p>{assignment.content}</p>
              <p>{assignment.due}</p>
              <p>{assignment.complete}</p>
              <button
                className="btn btn-sm text-info"
                onClick={() => this.editassignment(assignment.assignment_id)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm text-danger"
                onClick={() => this.deleteassignment(assignment.assignment_id)}
              >
                Delete
              </button>
            </div>
          );
        })}
        <div className="form-group mx-4">
          <input
            className="form-control"
            placeholder="Module"
            onChange={this.handleChangeContent}
            value={this.state.content}
          />
        <input
            className="form-control"
            placeholder="Contents"
            onChange={this.handleChangeDue}
            value={this.state.due}
          />
           
          <button className="btn btn-success mt-3" onClick={this.createassignment}>
            Create a new note
          </button>
        </div>
      </div>
    );
  }
}
