import R2DeckGL from "./r2deckgl";
import {x} from "./data/x-hexagon-layer";

var el = document.getElementById("widget");
var r2DeckGL = new R2DeckGL(el);
el.innerHTML = r2DeckGL.renderValue(x);
