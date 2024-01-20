import React from "react";
import { Box, Typography } from "@mui/material/Button";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"

const CalendarPage = () => {
  return (
    <div style={{}}>
      <FullCalendar plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]} initialView="dayGridMonth" />
    </div>
  );
};

export default CalendarPage;
