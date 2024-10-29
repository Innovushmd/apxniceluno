const fs = require('fs');
const pelis = require('./pelis');

const args = process.argv.slice(2);

if (args.includes('--sort')) {
  const propiedad = args[args.indexOf('--sort') + 1];
  console.table(pelis.sortBy(propiedad));
} else if (args.includes('--search')) {
  const criterio = args[args.indexOf('--search') + 1];
  console.table(pelis.search(criterio));
} else if (args.includes('--tag')) {
  const tag = args[args.indexOf('--tag') + 1];
  console.table(pelis.byTag(tag));
} else {
  console.table(pelis.all());
}
