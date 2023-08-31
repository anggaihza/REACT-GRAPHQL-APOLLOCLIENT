import React from "react";
import {useCharacter} from "../hooks/useCharacter";
import "./Character.css";
import {useParams} from "react-router-dom";

export const Character = () => {
  const {id} = useParams();

  const {data, error, loading} = useCharacter(id);

  if (error) return <div>Soemething went wrong</div>;

  if (loading) return <div>Spinner.......</div>;

  console.log({data, error, loading});
  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} />

      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>

        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
