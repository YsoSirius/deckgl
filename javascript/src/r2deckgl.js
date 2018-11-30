var deck = global.deck;

var logVersions = function() {
  console.log("deck.gl version: " + deck.version);
  if (typeof mapboxgl !== "undefined") {
    console.log("mapbox-gl version: " + mapboxgl.version);
  }
};

export default function(el) {
  console.log("r2deckgl", el);

  this.renderValue = function(x) {
    logVersions();
    console.log(x);
    return "r2deckgl";
  };

  this.resize = function(width, height) {

  };
}
