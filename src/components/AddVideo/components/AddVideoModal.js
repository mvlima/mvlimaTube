import React from "react";
import { createClient } from "@supabase/supabase-js";
import useForm from "../hooks/useForm";
import { TfiClose } from "react-icons/tfi";

function getVideoId(url) {
  const videoId = url.split("v=")[1];

  if (videoId?.includes("&")) {
    const splitVideoId = videoId.split("&")[0];
    return splitVideoId;
  }

  return videoId;
}

function getThumbnail(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export default function AddVideoModal({ setIsVisible }) {
  const formAddVideo = useForm({ initialValues: { title: "", url: "" } });
  const PROJECT_URL = "https://sgyawvzypohjxkmskumh.supabase.co";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNneWF3dnp5cG9oanhrbXNrdW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTE1MzIsImV4cCI6MTk4Mzk2NzUzMn0.Hz2kKh4GFFwh-1iuVkNJonTL6pdH6-0xzYIHTzyJfvk";

  const supabase = createClient(PROJECT_URL, API_KEY);

  const title = formAddVideo.values.title;
  const url = formAddVideo.values.url;
  const thumbnail = getThumbnail(getVideoId(url));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        supabase
          .from("video")
          .insert({
            title: title,
            url: url,
            thumbnail: thumbnail,
            playlist: "games",
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

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
          <TfiClose />
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
