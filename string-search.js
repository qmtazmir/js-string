const products = [
  "Amazon All-New Fire HD samsung 8 Tablet",
  "Samsung - Gear Fit2",
  "Apple 9.7-Inch iPad Pro with WiFi",
  "Amazon Google Chromecast samsung Ultra",
  "GoPro HERO5 Black 4K Action Camera",
  "zoPro HERO5  Samsung Black 4K Action Camera",
  "Amazon Kindle Voyage E-reader",
  'samsung Galaxy Tab A 8" Tablet',
  'Tamsung Galaxy Tab A 8" Tablet',
  " Amazon Apple Watch Series 2 38mm  ",
  "Samsung Rose Gold",
  "Aluminum Case with",
  "Pink Sand Sport Band",
];

const searching = "Amazon";

//indexOf

const output = [];

for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    output.push(product);
  }
}
// console.log(output);

for (const product of products) {
  if (product.toLowerCase().startsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
