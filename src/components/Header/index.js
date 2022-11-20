import React from "react";
import { StyledBanner } from "./components/Banner";
import { StyledHeader } from "./styles";
import config from "../../../config.json";

export default function Header() {
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
