import React from "react";

export default function AddVideoButton({ setIsVisible }) {
  return (
    <button
      type="button"
      className="add-video"
      onClick={() => {
        setIsVisible(true);
      }}
    >
      +
    </button>
  );
}
