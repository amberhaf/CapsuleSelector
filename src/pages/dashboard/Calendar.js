import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'
import uuidV4 from 'uuid/v4'
import { minTime, maxTime, calendarInitialState } from '../../services/firebase'
//Compoments
import BigCalendar from 'react-big-calendar'
import Dialog from 'material-ui/Dialog'
import Modal from './Modal'
import Sidebar from './Sidebar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
//Actions
import {
  GetEvents,
  UpdateEvents,
  GetModules,
  UpdateModules,
  GetAssignment,
  UpdateAssignment
} from "../../helpers/db";
//Styles
import './styles/dragAndDrop.css'
//import './styles/less.css'
import './styles/react-big-calendar.css'


BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const DragAndDropCalendar = withDragAndDrop(BigCalendar, {backend: false})

class Dnd extends Component {

  constructor(props) {
    super(props)

    this.state = calendarInitialState

    this.moveEvent = this.moveEvent.bind(this)
  }

  componentDidMount() {
    const newEvents = []
    const newModules = []
    const newAssignment = []

    GetEvents(this.props.uid).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        newEvents.push(doc.data())
        this.setState({
          events: newEvents,
        })
      });
    })
    GetModules(this.props.uid).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        newModules.push(doc.data())
        this.setState({
          modules: newModules,
        })
      });
    })
    GetAssignment(this.props.uid).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        newAssignment.push(doc.data())
        this.setState({
          assignment: newAssignment,
        })
      });
    })
  }


  moveEvent({event, start, end}) {
    const {events} = this.state
    const idx = events.indexOf(event)
    start = new Date(start);
    end = new Date(end);
    var family =[]
    let updatedEvent = {...event, start, end, family}
    const nextEvents = [...events]
    //alert("start Time" +start+ "end Time" + end 
    //+"\n" +"new start"+new Date(newStart)+ "new end" + new Date(newEnd));
    if (idx > -1) {
      for(var i=0; i<4; i++)
      {
        var id=event.family[i];

      nextEvents.splice(idx, 1, updatedEvent)
      UpdateEvents(id).update({start, end, family}).then(
        this.setState({
          events: nextEvents,
        })
      ).catch(error => {
        console.error('Update error', error);
      });
      start=start.setDate(start.getDate() + 7);
      start = new Date(start);
      end=end.setDate(end.getDate() + 7);
      end = new Date(end);
      }
    }
    else {
      for(var i=0; i<4; i++)
      {
        const newEventId=uuidV4();
        family[i]= newEventId;
      }
      for(var i=0; i<4; i++)
      {
        const newEventId=family[i];
        updatedEvent = {...event, start, end, family}
        updatedEvent = {...updatedEvent, id: newEventId, ownerId: this.props.uid}
        console.log(updatedEvent)
        nextEvents.push(updatedEvent)
        UpdateEvents(newEventId).set(updatedEvent).then(
          this.setState({
            events: nextEvents,
          })
        ).catch(error => {
          console.error('Create New Event error', error);
        });
        start=start.setDate(start.getDate() + 7);
        start = new Date(start);
        end=end.setDate(end.getDate() + 7);
        end = new Date(end);
      }
    }
  }

  selectEvent = (event) => {
    this.handleOpen(event)
  }

  resizeEvent = (resizeType, {event, start, end}) => {
    const {events} = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? {...existingEvent, start, end}
        : existingEvent
    })

    UpdateEvents(event.id).update({start, end}).then(
      this.setState({
        events: nextEvents,
      })
    ).catch(error => {
      console.error('Update error', error);
    });
  }
  createModule = ({title, code, link, type}) => {
    const {modules} = this.state
    const newModuleId = uuidV4()
    const updatedModule = {...this.state.modal, id: newModuleId, ownerId: this.props.uid, title, code, link, type}
    const nextModules = [...modules]
    nextModules.push(updatedModule)
    UpdateModules(newModuleId).set(updatedModule).then(
      this.setState({
        modules: nextModules,
      })
    ).catch(error => {
      console.error('Create New Module error', error);
    });
  }
  createAssignment = ({title, code, link, type, deadline, due}) => {
    const {assignment} = this.state
    const newAssignmentId = uuidV4()
    const updatedAssignment = {...this.state.modal, id: newAssignmentId, ownerId: this.props.uid, title, code, link, type, deadline, due}
    const nextAssignment = [...assignment]
    nextAssignment.push(updatedAssignment)
    UpdateAssignment(newAssignmentId).set(updatedAssignment).then(
      this.setState({
        assignment: nextAssignment,
      })
    ).catch(error => {
      console.error('Create New Assignment error', error);
    });
  }
  editEvent = ({id, title, code, link, type, due}) => {
    const {events} = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === id
        ? {...existingEvent, title, code, link, type, due}
        : existingEvent
    })

    UpdateEvents(id).update({title, code, link, type, due}).then(
      this.setState({
        events: nextEvents,
      })
    ).catch(error => {
      console.error('Update Event error', error);
    });
  }
  editModule = ({id, title, code, link, type}) => {
    const {modules} = this.state

    const nextModules = modules.map(existingModule => {
      return existingModule.id === id
        ? {...existingModule, title, code, link, type}
        : existingModule
    })
    UpdateModules(id).update({title, code, link, type}).then(
      this.setState({
        modules: nextModules,
      })
    ).catch(error => {
      console.error('Update Module error', error);
    });
  }
  editAssignment = ({id, title, code, link, type, deadline, due}) => {
    const {assignment} = this.state 

    const nextAssignment = assignment.map(existingAssignment => {
      return existingAssignment.id === id
        ? {...existingAssignment, title, code, link, type, deadline, due}
        : existingAssignment
    })
    UpdateAssignment(id).update({title, code, link, type, deadline, due}).then(
      this.setState({
        assignment: nextAssignment,
      })
    ).catch(error => {
      console.error('Update Module error', error);
    });
  }
  deleteEvent = ({id}) => {
    const {events} = this.state

    const nextEvents = events.filter(existingEvent => {
      return existingEvent.id !== id
    })

    UpdateEvents(id).delete().then(
      this.setState({
        events: nextEvents,
      })
    ).catch(error => {
      console.error('Delete Event error', error);
    });
  }
  deleteModule = ({id}) => {
    const {modules} = this.state

    const nextModules = modules.filter(existingModule => {
      return existingModule.id !== id
    })

    UpdateModules(id).delete().then(
      this.setState({
        modules: nextModules,
      })
    ).catch(error => {
      console.error('Delete error', error);
    });
  }
  deleteAssignment = ({id}) => {
    const {assignment} = this.state

    const nextAssignment = assignment.filter(existingAssignment => {
      return existingAssignment.id !== id
    })

    UpdateAssignment(id).delete().then(
      this.setState({
        assignment: nextAssignment,
      })
    ).catch(error => {
      console.error('Delete error', error);
    });
  }
  handleClose = () => {
    this.setState({
      modalOpen: false,
      modulesOpen: false,
      assignmentOpen: false,
      modal: calendarInitialState.modal,
    });
  };
  handleOpen = (event) => {
    this.setState({
      modalOpen: true,
      modal: event,
    });
  };
  handleModules = (event) => {
    this.setState({
      modal: event ? event : {...this.state.modal},
      modulesOpen: true
    });
  }
  handleAssignment = (event) => {
    this.setState({
      modal: event ? event : {...this.state.modal, deadline: null},
      assignmentOpen: true
    });
  }

  render() {
    if (this.state.events) {
      return (
        <div className={'row'}>
          <div className={'col-2'}>
            Modules:
            <FloatingActionButton
              mini={true}
              className={'m-2'}
              onClick={() => this.handleModules()}
            >
              <ContentAdd />
            </FloatingActionButton>
            <Sidebar events={this.state.modules}
                     onClickEvent={this.handleModules}
            />
          </div>
          <div style={{height: 500}} className={'col-8'}>

            <DragAndDropCalendar

              events={this.state.events}
              onEventDrop={this.moveEvent}
              resizable
              onEventResize={this.resizeEvent}
              defaultView="week"
              defaultDate={new Date()}
              onSelectEvent={this.selectEvent}
              min={minTime}
              max={maxTime}
            />
            <Dialog title="Class"
                    modal={false}
                    open={this.state.modalOpen}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
            >
              <Modal event={this.state.modal}
                     onRequestClose={this.handleClose}
                     onEditEvent={this.editEvent}
                     onDeleteEvent={this.deleteEvent}
              />
            </Dialog>
            <Dialog title="Modules"
                    modal={false}
                    open={this.state.modulesOpen}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
            >
              <Modal event={this.state.modal}
                     onRequestClose={this.handleClose}
                     onCreatEvent={this.createModule}
                     onEditEvent={this.editModule}
                     onDeleteEvent={this.deleteModule}
              />
            </Dialog>
            <Dialog title="Assignment"
                    modal={false}
                    open={this.state.assignmentOpen}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
            >
              <Modal event={this.state.modal}
                     onRequestClose={this.handleClose}
                     onCreatEvent={this.createAssignment}
                     onEditEvent={this.editAssignment}
                     onDeleteEvent={this.deleteAssignment}
              />
            </Dialog>
          </div>
          <div className={'col-2'}>
            Deadlines:
            <div>
              <FloatingActionButton
                mini={true}
                className={'m-2'}
                onClick={() => this.handleAssignment()}
              >
                <ContentAdd />
              </FloatingActionButton>
            </div>
            <Sidebar events={this.state.assignment}
                     onClickEvent={this.handleAssignment}
            />
          </div>
        </div>
      )
    }
  }
}

export default DragDropContext(HTML5Backend)(Dnd)