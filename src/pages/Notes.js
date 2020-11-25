import React, { Component } from "react";
import Header from "../components/Header";
import { auth, db } from "../services/firebase";


export default class Notes extends Component {
  constructor() {
    super();
    this.state = {
      user: auth().currentUser,
      notes: [],
      noteTitle: "",
      content: "",
      colour: "",
      note: {},
 
    };
    this.handleChangeColour = this.handleChangeColour.bind(this);   
    this.handleChangeNoteTitle = this.handleChangeNoteTitle.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.createnote = this.createnote.bind(this);
    this.editnote = this.editnote.bind(this);
  }

  componentDidMount() {
    db.ref(`all_note/${this.state.user.uid}`).on("value", snapshot => {
      let allnote = [];
      snapshot.forEach(snap => {
        allnote.push(snap.val());
      });
      console.log(allnote);
      this.setState({ notes: allnote });
    });
  }
    HandleChangeColour(e){
      this.setState({
        colour: e.target.value
      })
  }

  handleChangeNoteTitle(e) {
    this.setState({
      noteTitle: e.target.value
    });
  }
  handleChangeContent(e) {
    this.setState({
      content: e.target.value
    });
  }
  handleChangeColour(e) {
    this.setState({colour: e.target.value });
  }
  createnote() {
    const uid = this.state.user.uid;
    const { noteTitle } = this.state;
    const { content } = this.state;
    const { colour } = this.state;
    const note = this.state.note;
    if (note && note.noteTitle && note.content) {
      return db
        .ref(`all_note/${uid}/${note.note_id}`)
        .update({
          noteTitle,
          content,
          colour,          
          uid
        })
        .then(_ => {
          this.setState({ noteTitle: "", content: "", colour: "", note: {} });
        })
        .catch(error => console.log(error.message));
    }
    const note_id = `note-${Date.now()}`;
    db.ref(`all_note/${uid}/${note_id}`)
      .set({
        noteTitle,
        content,
        colour,
        note_id,
        uid
      })
      .then(_ => {
        this.setState({ noteTitle: "", content: "", colour: "", note: {} });
      })
      .catch(error => console.log(error.message));
  }

  editnote(note_id) {
    db.ref(`all_note/${this.state.user.uid}/${note_id}`)
      .once("value")
      .then(snapshot => {
        this.setState({
          note: snapshot.val(),
          noteTitle: snapshot.val().noteTitle,
          content: snapshot.val().content,
          colour: snapshot.val().colour
        });
      });
  }

  deletenote(note_id) {
    db.ref(`all_note/${this.state.user.uid}/${note_id}`).remove();
  }

  render() {
    return (
      <section class="page-section bg-primary">
      <div class="container">
        <Header />
        <h2> Notes </h2>
       
        {this.state.notes.map(note => {
          return (
            <div key={note.note_id} className={"card card-body m-2 "+(note.colour)} >
               <p>{note.noteTitle }</p>
               <p>{note.content}</p>
               
              <button
                className="btn1  text-info"
                onClick={() => this.editnote(note.note_id)}
              >
                Edit
              </button>
              <button
                className="btn1   text-danger"
                onClick={() => this.deletenote(note.note_id)}
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
            onChange={this.handleChangeNoteTitle}
            value={this.state.noteTitle}
          />
                 
          <textarea 
            className="form-control"
            placeholder="Contents"
            onChange={this.handleChangeContent}
            value={this.state.content}
              type="text"
              cols="30"
              rows="8"
              />
          <select className="colDrop" value={this.state.colour} onChange= {this.handleChangeColour}>
          <option data-isd="1" value="">White</option>
            <option data-isd="1" value="red">Red</option>
            <option data-isd="2" value="orange">Orange</option>
            <option data-isd="3" value="yellow">Yellow</option>
            <option data-isd="4" value="green">Green</option>
            <option data-isd="5" value="blue">Blue</option>
            <option data-isd="6" value="pink">Pink</option>
            <option data-isd="7" value="purple">Purple</option>
          </select>
          <button className="btn btn-success mt-3" onClick={this.createnote}>
            Create a new note
          </button>
        </div>
      </div>
      </section>
    );
  }
}