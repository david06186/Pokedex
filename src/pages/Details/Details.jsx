import "./Details.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchbarDetail from "../../components/SearchbarDetail/SearchbarDetail";
import PokeCardLarge from "../../components/PokeCardLarge/PokeCardLarge";
import { SearchContext } from "../../context/Context";

const Details = () => {
  const [currentPokemonData, setCurrentPokemonData] = useState();
  const { setSearchElement } = useContext(SearchContext);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((fetchedData) => setCurrentPokemonData(fetchedData))
      .catch((error) => console.error("Error auf der Details Page", error));
    setSearchElement("");
  }, [name]);

  return (
    <div className="details-div">
      <Header />
      <SearchbarDetail />
      {currentPokemonData ? (
        <>
          <PokeCardLarge props={currentPokemonData} />
        </>
      ) : (
        <p className="loading"></p>
      )}
    </div>
  );
};

export default Details;
