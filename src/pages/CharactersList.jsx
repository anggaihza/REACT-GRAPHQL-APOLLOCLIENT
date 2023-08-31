import React from "react";
import "./CharacterList.css";
import {useCharacters} from "../hooks/useCharacters";
import {Link} from "react-router-dom";

const CharactersList = () => {
  const {error, data, loading} = useCharacters();

  console.log({error, loading, data});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt="aa" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
