import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { createEventId } from "../utils/calendar-utils.ts";
import { Box, Paper } from "@mui/material";
import Header from "../components/Header.tsx";
interface SidebarProps {
  weekendsVisible: boolean;
  handleWeekendsToggle: () => void;
  currentEvents: Array<{ id: string; start: Date; title: string }>;
}
// const calendar = () => {
export const Sidebar: React.FC<SidebarProps> = ({ currentEvents }) => {
  return (
    <Paper className="demo-app-sidebar">
      <div className="demo-app-sidebar-section"></div>
      <div className="demo-app-sidebar-section">
        <h2>All Events ({currentEvents.length})</h2>
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </Paper>
  );
};

function SidebarEvent({
  event,
}: {
  event: { id: string; start: Date; title: string };
}) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}
function renderEventContent(eventInfo: {
  timeText: string;
  event: { title: string };
}) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
const Calendar = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState<
    Array<{ id: string; start: Date; title: string }>
  >([]);

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  function handleDateSelect(selectInfo: {
    view: {
      calendar: {
        unselect: () => void;
        addEvent: (event: {
          id: string;
          title: string;
          start: string;
          end: string;
          allDay: boolean;
        }) => void;
      };
    };
    startStr: string;
    endStr: string;
    allDay: boolean;
  }) {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEventClick(clickInfo: {
    event: { title: string; remove: () => void };
  }) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  function handleEvents(
    events: Array<{ id: string; start: Date; title: string }>
  ) {
    setCurrentEvents(events);
  }

  return (
    <Box>
      {" "}
      <Header
        title="Calendar"
        description=" View and manage your schedule with important events and reminders"
      />
      <div className="demo-app">
        <Sidebar
          weekendsVisible={weekendsVisible}
          handleWeekendsToggle={handleWeekendsToggle}
          currentEvents={currentEvents}
        />
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={(events) =>
              handleEvents(
                events.map((event) => ({
                  id: event.id,
                  start: event.start || new Date(),
                  title: event.title,
                }))
              )
            } // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
       eventAdd={function(){}}
       eventChange={function(){}}
       eventRemove={function(){}}
       */
          />
        </div>
      </div>
    </Box>
  );
};

export default Calendar;
