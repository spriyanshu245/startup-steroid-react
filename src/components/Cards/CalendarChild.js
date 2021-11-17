import React, { useState } from  "react";
import { ScheduleComponent, Day, Week ,WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

const CalendarChild = () => {

  const dataManger = new DataManager({ 
    url: "http://localhost:54738/Home/LoadData",
    crudUrl: "http://localhost:54738/Home/UpdateData", 
    crossDomain: true, 
    adaptor: new UrlAdaptor() 
  });

  return (
      <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Child View Calendar</span>
            </div>
              <ScheduleComponent width='100%' height='550px' currentView = 'Agenda' eventSettings={{ dataSource: dataManger }} readonly={true}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
              </ScheduleComponent>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CalendarChild

