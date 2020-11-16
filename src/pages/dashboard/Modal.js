import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  handleChange = e => {
    e.preventDefault();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.state.onRequestClose()
    console.log(this.state.event.start);
    this.props.event.title ? this.state.onEditEvent(this.state.event) :
      this.state.onCreatEvent(this.state.event)
  }

  handleDelete = e => {
    e.preventDefault();
    this.state.onRequestClose()
    this.state.onDeleteEvent(this.state.event)
  }
  handleCancel = e => {
    e.preventDefault();
    this.state.onRequestClose()
  }

  render() {
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
      >
        <RaisedButton
          className={this.props.event.title ? '' : 'd-none'}
          label="Delete"
          type="button"
          secondary={true}
          onClick={this.handleDelete}
        />
         <RaisedButton className={this.props.event.title ? '' : 'd-none'}>
          <a target="_blank" href={this.props.event.link}>Go to class</a>
          </RaisedButton>
        <div>
          <TextField
            defaultValue={this.state.event.title}
            floatingLabelText="Title"
            onChange={(event, newValue) => this.setState({event: {...this.state.event, title: newValue}})}
          />
           <TextField
            defaultValue={this.state.event.title}
            floatingLabelText="Colour"
            onChange={(event, newValue) => this.setState({event: {...this.state.event, title: newValue}})}
          />
          <TextField
            defaultValue={this.state.event.code}
            floatingLabelText="Module Code"
            onChange={(event, newValue) => this.setState({event: {...this.state.event, code: newValue}})}
          />
          <TextField
            defaultValue={this.state.event.link}
            floatingLabelText="Link to Class"
            onChange={(event, newValue) => this.setState({event: {...this.state.event, link: newValue}})}
          />
          {!('deadline' in this.state.event) ? 
            <label>
          Class type:
          <select value={this.state.event.type}  onChange= {(event, value) => this.setState({event: {...this.state.event, type:  event.target.value}})}>
            <option value="lecture">Lecture</option>
            <option value="lab">Lab</option>
            <option value="tutorial">Tutorial</option>
          </select>
        </label> : ''}
          {'deadline' in this.state.event ? <label> Deadline type:
          <select value={this.state.event.type}  onChange= {(event, value) => this.setState({event: {...this.state.event, type:  event.target.value}})}>
            <option value="Assignment">Assignment</option>
            <option value="Interview">Interview</option>
            <option value="Meeting">Meeting</option>
          </select>
        </label>: ''}
          {'deadline' in this.state.event ? <TextField
            defaultValue={this.state.event.due}
            floatingLabelText="Due date"
            onChange={(event, newValue) => this.setState({event: {...this.state.event, due: newValue}})}
          /> : ''}
           {(!('deadline' in this.state.event)&&(this.state.event.family.length===0))? 
             <label>
             Repeat for:
            <input value={this.state.event.repeat}
            type="number" min="1" max="100"
            onChange= {(event, value) => this.setState({event: {...this.state.event, repeat:  event.target.value}})}
          /> </label>: ''}
        </div>
        <div>
          <RaisedButton
            className={this.props.event.title ? ' mr-3 my-3' : 'd-none mr-3 my-3'}
            label="Update"
            primary={true}
            type="submit"
          />
          <RaisedButton
            className={this.props.event.title ? 'd-none mr-3 my-3' : 'mr-3 my-3'}
            label="Create"
            primary={true}
            type="submit"
          />
          <RaisedButton
            className={'mr-3 my-3'}
            label="Cancel"
            type="Cancel"
            onClick={this.handleCancel}
          />

        </div>

      </form>
    );
  }
}