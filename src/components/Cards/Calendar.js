import React, { useEffect, useState } from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  ViewsDirective,
  ViewDirective,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { extend, createElement } from "@syncfusion/ej2-base";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

const Calendar = (props) => {
  const [companyList, setCompanyList] = useState([]);
  // useEffect(()=>{
  //   fetch('http://localhost:61653/api/companygroupstartupapi/getallcompanystartupgroupList',
  //   {
  //     method: 'Get',
  //     headers: {'Content-Type':'application/json',}
  //   })
  //   .then(resp => resp.json())
  //   .then(resp => setCompanyList(resp))
  // },[]);

  // const companies = companyList["companyDtos"];
  // let source = companies.map((item) => ({ text: item.CompanyName ,value: item.CompanyId}));
  // console.log(companies);

  const onPopupOpen = (args) => {
    if (args.type === "Editor") {
      if (!args.element.querySelector(".custom-field-row")) {
        let row = createElement("div", { className: "custom-field-row" });
        let formElement = args.element.querySelector(".e-schedule-form");
        formElement.firstChild.insertBefore(
          row,
          formElement.firstChild.firstChild
        );
        let container = createElement("div", {
          className: "custom-field-container",
        });
        let inputEle = createElement("input", {
          className: "e-field",
          attrs: { name: "EventType" },
        });
        container.appendChild(inputEle);
        row.appendChild(container);
        let drowDownList = new DropDownList({
          dataSource: [],
          // dataSource: source,
          // dataSource: [
          //     { text: 'Public Event', value: 'public-event' },
          //     { text: 'Maintenance', value: 'maintenance' },
          //     { text: 'Commercial Event', value: 'commercial-event' },
          //     { text: 'Family Event', value: 'family-event' }
          // ],

          fields: { text: "text", value: "value" },
          value: args.data.EventType,
          floatLabelType: "Always",
          placeholder: "Invite To",
        });
        drowDownList.appendTo(inputEle);
        inputEle.setAttribute("name", "EventType");
      }
    }
  };

  const dataManger = new DataManager({
    url: "http://localhost:54738/Home/LoadData",
    crudUrl: "http://localhost:54738/Home/UpdateData",
    crossDomain: true,
    adaptor: new UrlAdaptor(),
  });

  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          {!props.Agenda ? (
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Calendar</span>
              </div>
              <ScheduleComponent
                width="100%"
                height="550px"
                currentView="Month"
                // popupOpen={onPopupOpen}
                eventSettings={{ dataSource: dataManger }}
                readonly={props.readonly}
              >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
              </ScheduleComponent>
            </div>
          ) : (
            <ScheduleComponent
              width="100%"
              height="450px"
              currentView="Agenda"
              // selectedDate={new Date(2021, 1, 15)}
              eventSettings={{ dataSource: dataManger }}
              readonly={true}
            >
              <ViewsDirective>
                <ViewDirective
                  option="Agenda"
                  allowVirtualScrolling={true}
                  HideEmptyAgendaDays={false}
                />
              </ViewsDirective>
              <Inject services={[Agenda]} />
            </ScheduleComponent>
          )}
        </div>
      </div>
    </div>
  );
};
export default Calendar;
