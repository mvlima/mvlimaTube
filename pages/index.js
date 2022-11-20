import config from "../config.json";
import Menu from "../src/components/Menu";
import Favorites from "../src/components/Favorites";
import { useEffect, useState } from "react";
import videoService from "../src/services/videoService";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";

export default function HomePage() {
  const service = videoService();
  const [searchValue, setSearchValue] = useState("");
  const [playlists, setPlaylists] = useState({});

  useEffect(() => {
    service.getAllVideos().then(({ data }) => {
      const newPlaylists = { ...playlists };

      data.forEach((video) => {
        !newPlaylists[video.playlist] && (newPlaylists[video.playlist] = []);

        newPlaylists[video.playlist] = [video, ...newPlaylists[video.playlist]];
      });

      setPlaylists(newPlaylists);
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* prop drilling */}
        <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
        <Header />
        <Timeline searchValue={searchValue} playlists={playlists} />
        <Favorites favorites={config.favorites} />
      </div>
    </>
  );
}
