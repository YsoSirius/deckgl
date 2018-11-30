export const x = {
  "latitude": 37.8,
  "longitude": -122.45,
  "zoom": 11,
  "pitch": 25,
  "bearing": 0,
  "initialViewState": null,
  "views": null,
  "properties": [],
  "layers": [
    {
      "className": "PolygonLayer",
      "data": "https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website/sf-zipcodes.json",
      "properties": {
        "id": "polygon-layer",
        "pickable": true,
        "stroked": true,
        "filled": true,
        "wireframe": true,
        "lineWidthMinPixels": 1,
        "getPolygon": data => data.contour,
        "getElevation": d => d.population / d.area / 10,
        "getFillColor": d => [d.population / d.area / 60, 140, 0],
        "getLineColor": [80, 80, 80],
        "getLineWidth": 1,
        "getTooltip": object => `${object.zipcode}<br/>Population: ${object.population}`
      }
    }
  ]
};
