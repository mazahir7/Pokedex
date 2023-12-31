"use strict";

const pokemonContainer = document.getElementById("pokemon-container");


const totalPokemon = 150;
const pokeColors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#F4E7DA",
  rock: "#D5D5D4",
  fairy: "#FCEAFF",
  poison: "#98D7A5",
  bug: "#F8D5A3",
  dragon: "#97B3E6",
  psychic: "#EAEDA1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5"
};

async function fetchingPokemon() {
  for (let i = 1; i <= totalPokemon; i++) {
    await getPokemonData(i);
  }
}


async function getPokemonData(id) {

  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(URL);
  const data = await res.json();
  // console.log(data);
  createPokemonCard(id, data);
}

function createPokemonCard(id, data) {

  const pokeCard = document.createElement("div");

  pokeCard.classList.add("poke-ball");

  const pokeType = data.types[0].type.name;

  pokeCard.style.background = pokeColors[pokeType];
  pokeCard.innerHTML = `
      <div class="poke-img">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="balba">
      </div>

      <div class="poke-info">
        <span class="number">#${String(id).padStart(3, "0")}</span >
        <h3 class="name">${data.name}</h3>
        <small class="type">Type: <span>${pokeType}</span></small>
      </div > `;

  pokemonContainer.appendChild(pokeCard);
}

fetchingPokemon();