import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import ptBR from "@fullcalendar/core/locales/pt-br";
import './App.css';


export default class App extends React.Component {
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
                              header={{
                                  left: 'today',
                                  center: 'prevYear prev title next nextYear',
                                  right: 'dayGridMonth list'
                              }}
                              buttonText={{
                                  list: 'Dia',
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
    }
}
