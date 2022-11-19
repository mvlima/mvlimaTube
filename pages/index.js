import styled from "styled-components";
import config from "../config.json";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Favorites from "../src/components/Favorites";
import { useEffect, useState } from "react";
import videoService from "../src/services/videoService";

function HomePage() {
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

export default HomePage;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  .profile-picture {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  .banner {
    width: 100%;
    height: 18rem;
    object-fit: cover;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 92.5rem;
    margin: 0 auto;
    padding: 1rem 2rem;
    gap: 1rem;
  }
`;

const StyledBanner = styled.div`
  background-image: url(${({ banner }) => banner});
  width: 100%;
  height: 18rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner banner={config.banner} />

      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          className="profile-picture"
          alt="Profile Picture"
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.position}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...props }) {
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
