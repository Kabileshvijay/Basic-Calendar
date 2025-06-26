import React from "react";
import { getMonthDays, formatDate } from "../utils/dateHelpers.js";

export default function MonthGrid({ date, events, today }) {
  const days = getMonthDays(date);

  return (
    <div className="month-grid">
      <div className="weekdays-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="days-grid">
        {days.map((day, idx) => {
          const dayStr = formatDate(day);
          const isToday = dayStr === formatDate(today);
          const event = events[dayStr];
          const isCurrentMonth = day.getMonth() === date.getMonth();

          let cellClass = "day-cell";
          if (isToday) {
            cellClass += " today";
          } else if (isCurrentMonth) {
            cellClass += " current-month";
          } else {
            cellClass += " other-month";
          }

          return (
            <div key={idx} className={cellClass}>
              <div className="day-number">{day.getDate()}</div>

              {event && (
                <span className={`event-badge ${isToday ? "today" : "normal"}`}>
                  {event}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
