import React from "react";
import { useRouter } from "next/router";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { AppBar } from "@mui/material";
import logo from "../public/ccript-logo.jpg";
import logoutIcon from "../public/logout-icon.jpg";

const CalendarPage = () => {
  let calendarRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    fetch("https://hiring-test-task.vercel.app/api/appointments", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("DATA", data);
      });
  }, []);

  const logout = () => {
    router.push("/");
    localStorage.removeItem("token");
  };

  return (
    <div>
      <AppBar
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "25px",
        }}
        position="relative"
      >
        <div style={{ height: "100px" }}>
          <img style={{ height: "100%" }} src={logo.src} />
        </div>
        <div style={{ height: "50px", marginLeft: "auto", marginRight: "5%" }}>
          <img
            onClick={() => {
              logout();
            }}
            style={{ height: "100%" }}
            src={logoutIcon.src}
          />
        </div>
      </AppBar>
      <div style={{ maxHeight: "100px" }}>
        <FullCalendar
          // ref={calendarRef}
          events={[
            {
              title: "event 1",
              date: "2024-01-01",
              end: "",
              start: "",
              allDay: false,
            },
            { title: "event 2", date: "2024-01-02" },
          ]}
          plugins={[timeGridPlugin, interactionPlugin]}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
