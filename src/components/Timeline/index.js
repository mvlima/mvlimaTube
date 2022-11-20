import React from "react";
import { StyledTimeline } from "./styles";

export default function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];

        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>

            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <span>{video.title}</span>
                  </a>
                ))}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
