const fs = require('fs');

const pelisJson = fs.readFileSync(__dirname + '/pelis.json');
const pelisData = JSON.parse(pelisJson);

const pelis = {
  all: () => pelisData,
  sortBy: (propiedad) => pelisData.sort((a, b) => a[propiedad] > b[propiedad] ? 1 : -1),
  search: (criterio) => pelisData.filter((peli) => peli.title.toLowerCase().includes(criterio.toLowerCase())),
  byTag: (tag) => pelisData.filter((peli) => peli.tags.includes(tag.toLowerCase())),
};

module.exports = pelis;