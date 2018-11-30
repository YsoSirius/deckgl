var deck = global.deck;
var deckglWidget = global.deckglWidget = {};

deckglWidget.colorToRGBArray = function(color) {
  color = color.substring(1); // remove '#'
  return [
    parseInt(color.substring(0, 2), 16),
    parseInt(color.substring(2, 4), 16),
    parseInt(color.substring(4), 16)
    ];
};

export default function(el) {
  console.log("r2deckgl", el);

  deckglWidget.element = el;
  var tooltipElement = deckglWidget.tooltipElement = document.createElement("div");
  tooltipElement.id = "tooltip";
  el.appendChild(tooltipElement);

  var deckgl = null;

  this.renderValue = function(x) {
    logVersions();
    console.log(x);

    var properties = {
      mapboxApiAccessToken: x.mapboxApiAccessToken || "",
      mapStyle: x.mapStyle || "",
      container: el.id,
      initialViewState: x.initialViewState || newInitialViewState(x),
      views: x.views || new MapView(),
      layers: []
    };
    properties = Object.assign(properties, x.properties);
    console.log(properties);

    deckgl = deckglWidget.deckgl = new deck.DeckGL(properties);

    deckglWidget.layers = x.layers.map(function(item) {
      if (item.properties.dataframeToD3) {
        item.data = HTMLWidgets.dataframeToD3(item.data);
      }

      item.properties.data = item.data;
      console.log(item);
      return newLayer(item.className, item.properties);
    });

    deckgl.setProps({ layers: deckglWidget.layers });

    return "r2deckgl";
  };

  this.resize = function(width, height) {

  };
}

// -----
var logVersions = function() {
  console.log("deck.gl version: " + deck.version);
  if (typeof mapboxgl !== "undefined") {
    console.log("mapbox-gl version: " + mapboxgl.version);
  }
};

var newInitialViewState = function(x) {
  return {
    longitude: x.longitude,
    latitude: x.latitude,
    zoom: x.zoom,
    pitch: x.pitch,
    bearing: x.bearing
  };
};

var newLayer = function(className, properties) {
  // Pass data back to R in 'shinyMode'
  if (HTMLWidgets.shinyMode) {
    properties.onClick = function(info) {
      var data = { lng: info.lngLat[0], lat: info.lngLat[1], object: info.object };
      Shiny.onInputChange(deckglWidget.element.id + "_onclick", data);
    };
  }

  if (properties.getTooltip) {
    properties.onHover = function({x, y, object}) {
      var tooltipElement = deckglWidget.tooltipElement;
      if (!object) {
        tooltipElement.innerHTML = "";
        return;
      }

      var text = properties.getTooltip(object);
      if (!properties.fixedTooltip) {
        tooltipElement.style.top = y + "px";
        tooltipElement.style.left = x + "px";
      }

      tooltipElement.innerHTML = text;
    };
  }

  return new deck[className](properties);
};
