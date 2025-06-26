import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

// Date Helper Functions
export function getToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export function getMonthDays(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [];
  
  for (let i = 0; i < firstDay.getDay(); i++) {
    days.push(new Date(year, month, i - firstDay.getDay() + 1));
  }
  
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(new Date(year, month, d));
  }
  
  return days;
}

export function loadEvents() {
  return {
    "2025-06-01": "Project Due",
    "2025-06-15": "Midterm Exam",
    "2025-06-22": "Doctor Appointment",
    "2025-06-26": "Birthday Party"
  };
}