import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  .profile-picture {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  .banner {
    width: 100%;
  }

  .user-info {
    margin-top: 3.5rem;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    gap: 1rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img className="banner" src={config.banner} alt="banner" />

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

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];

        return (
          <section>
            <h2>{playlistName}</h2>

            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
