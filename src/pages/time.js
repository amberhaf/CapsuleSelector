import React from 'react';
import {Inject,ScheduleComponent,Day, Week,WorkWeek,Month} from '@syncfusion/ej2-react-schedule';

class Time extends React.Component{
  render() {
return <ScheduleComponent currentView='Week'>
  <Inject services={[Day, Week, WorkWeek,Month]}/>
</ScheduleComponent>
  }
}
export default Time;


 







