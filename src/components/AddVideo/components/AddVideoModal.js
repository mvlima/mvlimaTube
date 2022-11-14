import React from "react";
import useForm from "../hooks/useForm";

export default function AddVideoModal({ setIsVisible }) {
  const formAddVideo = useForm({ initialValues: { title: "", url: "" } });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsVisible(false);
        formAddVideo.clearForm();
      }}
    >
      <div>
        <button
          className="close-modal"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          X
        </button>
        <input
          placeholder="Video Title"
          name="title"
          value={formAddVideo.values.title}
          onChange={formAddVideo.handleChange}
        />
        <input
          placeholder="URL"
          name="url"
          value={formAddVideo.values.url}
          onChange={formAddVideo.handleChange}
        />
        <button type="submit">Add Video</button>
      </div>
    </form>
  );
}
