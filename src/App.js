import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import ptBR from "@fullcalendar/core/locales/pt-br";
import './App.css';


export default class App extends React.Component {
    calendarRef = React.createRef();

    render() {
        const events = [{
            id: 1,
            title: 'Teste Frau',
            start: '2019-08-30',
            classNames: ['teste'],
            allDay: true
        }, {
            id: 2,
            title: 'Leonardo',
            start: '2019-08-25',
            end: '2019-08-28',
            allDay: true
        }, {
            id: 3,
            title: 'Glenio',
            start: '2019-09-06'
        }];

        return (
            <div className="App">
                <FullCalendar defaultView="dayGridMonth"
                              plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
                              dateClick={this.handleDateClick}
                              ref={this.calendarRef}
                              header={{
                                  left: 'today',
                                  center: 'previousYear previousMonth title nextMonth nextYear',
                                  right: 'dayGridMonth list'
                              }}
                              buttonText={{
                                  list: 'Dia',
                              }}
                              customButtons={{
                                  previousMonth: {
                                      click: () => {
                                          this.handlePreviousMonth();
                                      }
                                  },
                                  nextMonth: {
                                      click: () => {
                                          this.handleNextMonth();
                                      }
                                  },
                                  previousYear: {
                                      click: () => {
                                          this.handlePreviousYear();
                                      }
                                  },
                                  nextYear: {
                                      click: () => {
                                          this.handleNextYear();
                                      }
                                  }
                              }}
                              buttonIcons={{
                                  previousMonth: 'chevron-left',
                                  nextMonth: 'chevron-right',
                                  previousYear: 'chevrons-left',
                                  nextYear: 'chevrons-right'
                              }}
                              weekends={true}
                              fullscreen={false}
                              events={events}
                              locale={ptBR}/>
            </div>
        );
    }

    handleDateClick = (arg) => {
        console.log(arg);
    };

    handlePreviousMonth = () => {
        let calendarApi = this.calendarRef.current.getApi();
        calendarApi.prev();
        console.log(calendarApi.getDate());
    };

    handleNextMonth = () => {
        let calendarApi = this.calendarRef.current.getApi();
        calendarApi.next();
        console.log(calendarApi.getDate());
    };

    handlePreviousYear = () => {
        let calendarApi = this.calendarRef.current.getApi();
        calendarApi.prevYear();
        console.log(calendarApi.getDate());
    };

    handleNextYear = () => {
        let calendarApi = this.calendarRef.current.getApi();
        calendarApi.nextYear();
        console.log(calendarApi.getDate());
    }
}
