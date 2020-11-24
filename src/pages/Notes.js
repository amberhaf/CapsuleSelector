import React, { Component } from "react";
import Header from "../components/Header";
import { auth, db } from "../services/firebase";


export default class Notes extends Component {
  constructor() {
    super();
    this.HandleChangeColour = this.HandleChangeColour.bind(this);
    this.state = {
      user: auth().currentUser,
      notes: [],
      module: "",
      content: "",
      note: {},

      
    };
   
    this.handleChangeModule = this.handleChangeModule.bind(this);
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
    HandleChangeColour=(e)=>{
    let idx=e.target.selectedIndex;
    let dataset=e.target.options[idx].dataset;
    console.log(dataset.isd);

  }

  handleChangeModule(e) {
    this.setState({
      module: e.target.value
    });
  }
  handleChangeContent(e) {
    this.setState({
      content: e.target.value
    });
  }
  createnote() {
    const uid = this.state.user.uid;
    const { module } = this.state;
    const { content } = this.state;
    const note = this.state.note;
    if (note && note.module) {
      return db
        .ref(`all_note/${uid}/${note.note_id}`)
        .update({
          module,
          content,
          uid
        })
        .then(_ => {
          this.setState({ module: "", content: "", note: {} });
        })
        .catch(error => console.log(error.message));
    }
    const note_id = `note-${Date.now()}`;
    db.ref(`all_note/${uid}/${note_id}`)
      .set({
        module,
        content,
        note_id,
        uid
      })
      .then(_ => {
        this.setState({ module: "", content: "", note: {} });
      })
      .catch(error => console.log(error.message));
  }

  editnote(note_id) {
    db.ref(`all_note/${this.state.user.uid}/${note_id}`)
      .once("value")
      .then(snapshot => {
        this.setState({
          note: snapshot.val(),
          module: snapshot.val().module,
          content: snapshot.val().content
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
            <div key={note.note_id} className="card card-body  m-2" >
              <select onChange={this.HandleChangeColour}>
            <option data-isd="1" value="red">Red</option>
            <option data-isd="2" value="orange">Orange</option>
            <option data-isd="3" value="yellow">Yellow</option>
            <option data-isd="4" value="green">Green</option>
            <option data-isd="5" value="blue">Blue</option>
            <option data-isd="6" value="pink">Pink</option>
            <option data-isd="7" value="purple">Purple</option>
          </select>
               <p>{note.module }</p>
               <p>{note.content}</p>

              <button
                className="btn1   text-info"
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
            onChange={this.handleChangeModule}
            value={this.state.module}
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
          <button className="btn btn-success mt-3" onClick={this.createnote}>
            Create a new note
          </button>
        </div>
      </div>
      </section>
    );
  }
}