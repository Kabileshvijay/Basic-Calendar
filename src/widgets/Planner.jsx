import React, { useState } from "react";
import MonthGrid from "./MonthGrid.jsx";
import NavControls from "./NavControls.jsx";
import { getToday, loadEvents } from "../utils/dateHelpers.js";
import { Calendar } from "lucide-react";
import "./Planner.css";

export default function Planner() {
  const today = getToday();
  const [currentDate, setCurrentDate] = useState(today);
  const events = loadEvents();

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const handleReset = () => {
    setCurrentDate(today);
  };

  return (
    <>
      <div className="planner-container">
        <div className="planner-content">
          <div className="planner-header">
            <h1 className="planner-title">Calendar</h1>
          </div>

          <NavControls
            date={currentDate}
            onPrev={handlePrevMonth}
            onNext={handleNextMonth}
          />

          <MonthGrid date={currentDate} events={events} today={today} />
        </div>
      </div>

      <button onClick={handleReset} className="fixed-today-button">
        <Calendar size={18} />
        Today
      </button>
    </>
  );
}
