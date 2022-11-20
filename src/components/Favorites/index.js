import React from "react";
import { StyledFavories } from "./styles";

export default function Favorites(props) {
  const favoritesList = Object.keys(props.favorites);

  return (
    <StyledFavories>
      <h2 className="favorites-title">Favorite AluraTubers</h2>

      <div className="favorites-list">
        {favoritesList.map((favorites) => {
          const favorite = props.favorites[favorites];
          return (
            <div key={favorite.tag}>
              <a href={`github.com/${favorite.tag}`} className="favorite">
                <img
                  className="favorite-profile-picture"
                  src={favorite.picture}
                  alt="Favorites profile picture"
                />
                <span className="favorite-tag">@{favorite.tag}</span>
              </a>
            </div>
          );
        })}
      </div>
    </StyledFavories>
  );
}
