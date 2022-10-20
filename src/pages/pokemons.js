import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const pokemons = [
  {
    slug: "bulbasaur",
    name: "Bulbasaur",
  },
  {
    slug: "ivysaur",
    name: "Ivysaur",
  },
  {
    slug: "charmander",
    name: "Charmander",
  },
  {
    slug: "squirtle",
    name: "Squirtle",
  },
]

const Pokemons = ({ children }) => {
  return (
    <Layout>
      <h2>My Pokemons</h2>
      <ul role="navigation">
        {pokemons.map(pokemon => (
          <li>
            <Link to={pokemon.slug}>{pokemon.slug}</Link>
          </li>
        ))}
      </ul>
      {children}
    </Layout>
  )
}

export default Pokemons
