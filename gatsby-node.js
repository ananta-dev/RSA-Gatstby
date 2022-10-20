const path = require("path")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const pokemonTemplate = path.resolve("./src/templates/pokemon-template.js")
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

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

  pokemons.forEach(pokemon =>
    createPage({
      path: `/pokemons/${pokemon.slug}`,
      component: pokemonTemplate,
      context: { ...pokemon },
      defer: true,
    })
  )
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  //Only update the '/app' page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is  special key that is used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}
