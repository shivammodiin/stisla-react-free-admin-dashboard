import React, { Component } from "react";
import * as $ from "jquery";
import fullCalendar from "fullcalendar/dist/fullcalendar.min.js";
import ProgressHeightWidth from "../../js/ProgressHeightWidth.js";

export class Calender extends Component {
  componentDidMount() {
    ProgressHeightWidth();
    //   $("#myEvent").fullCalendar({
    //     height: "auto",
    //     header: {
    //       left: "prev,next today",
    //       center: "title",
    //       right: "month,agendaWeek,agendaDay,listWeek",
    //     },
    //     editable: true,
    //     events: [
    //       {
    //         title: "Conference",
    //         start: "2018-01-9",
    //         end: "2018-01-11",
    //         backgroundColor: "#fff",
    //         borderColor: "#fff",
    //         textColor: "#000",
    //       },
    //       {
    //         title: "John's Birthday",
    //         start: "2018-01-14",
    //         backgroundColor: "#007bff",
    //         borderColor: "#007bff",
    //         textColor: "#fff",
    //       },
    //       {
    //         title: "Reporting",
    //         start: "2018-01-10T11:30:00",
    //         backgroundColor: "#f56954",
    //         borderColor: "#f56954",
    //         textColor: "#fff",
    //       },
    //       {
    //         title: "Starting New Project",
    //         start: "2018-01-11",
    //         backgroundColor: "#ffc107",
    //         borderColor: "#ffc107",
    //         textColor: "#fff",
    //       },
    //       {
    //         title: "Social Distortion Concert",
    //         start: "2018-01-24",
    //         end: "2018-01-27",
    //         backgroundColor: "#000",
    //         borderColor: "#000",
    //         textColor: "#fff",
    //       },
    //       {
    //         title: "Lunch",
    //         start: "2018-01-24T13:15:00",
    //         backgroundColor: "#fff",
    //         borderColor: "#fff",
    //         textColor: "#000",
    //       },
    //       {
    //         title: "Company Trip",
    //         start: "2018-01-28",
    //         end: "2018-01-31",
    //         backgroundColor: "#fff",
    //         borderColor: "#fff",
    //         textColor: "#000",
    //       },
    //     ],
    //   });
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Calendar</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Modules</a>
              </div>
              <div className="breadcrumb-item">Calendar</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Calendar</h2>
            <p className="section-lead">
              We use 'Full Calendar' made by @fullcalendar. You can check the
              full documentation <a href="https://fullcalendar.io/">here</a>.
            </p>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Calendar</h4>
                  </div>
                  <div className="card-body">
                    <div className="fc-overflow">
                      <div id="myEvent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Calender;
