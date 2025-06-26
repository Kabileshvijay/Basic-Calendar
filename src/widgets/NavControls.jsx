import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NavControls({ date, onPrev, onNext }) {
  const formattedDate = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="nav-controls">
      <button onClick={onPrev} className="nav-button" title="Previous Month">
        <ArrowLeft size={20} />
      </button>

      <h2 className="nav-title">{formattedDate}</h2>

      <button onClick={onNext} className="nav-button" title="Next Month">
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
