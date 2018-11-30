export const x = {
  "latitude": 37.8,
  "longitude": -122.45,
  "zoom": 11,
  "pitch": 45,
  "bearing": 35,
  "initialViewState": null,
  "views": null,
  "properties": [],
  "layers": [
    {
      "className": "HexagonLayer",
      "data": "https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website/sf-bike-parking.json",
      "properties": {
        "id": "hexagon-layer",
        "extruded": true,
        "radius": 200,
        "elevationScale": 4,
        "getPosition": data => data.COORDINATES,
        "getTooltip": object => `${object.centroid.join(', ')}<br/>Count: ${object.points.length}`,
        "fixedTooltip": true,
        "pickable": true
      }
    }
  ]
};
