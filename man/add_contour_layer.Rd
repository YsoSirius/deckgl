% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/layers_contour-layer.R
\name{add_contour_layer}
\alias{add_contour_layer}
\title{Add a contour layer to the deckgl widget}
\usage{
add_contour_layer(deckgl, id = "contour-layer", data = NULL,
  properties = list(), ...)
}
\arguments{
\item{deckgl}{deckgl widget}

\item{id}{id of the layer}

\item{data}{url to fetch data from or data object}

\item{properties}{named list of properties with names corresponding to the properties defined
in the \href{https://deck.gl/#/documentation/deckgl-api-reference}{deckgl-api-reference}
for the given layer class, additionally there is a \code{getTooltip} property (callback)
showing a tooltip when the mouse enters an object,
e. g. \code{getTooltip = JS("object => object.name")}}

\item{...}{more properties (will be added to the properties object), useful if you
want to use a properties object for more than one layer}
}
\description{
The \code{ContourLayer} renders contour lines for a given threshold and cell size.
Internally it implements \href{https://en.wikipedia.org/wiki/Marching_squares}{Marching Squares} algorithm to generate contour line segments
and feeds them into \code{LineLayer} to render lines.
}
\examples{
## @knitr contour-layer
data("sf_bike_parking")

contours <- list(
  use_contour_definition(
    threshold = 1,
    color = c(255, 0, 0),
    strokeWidth = 2
  ),
  use_contour_definition(
    threshold = 5,
    color = c(0, 255, 0),
    strokeWidth = 3
  ),
  use_contour_definition(
    threshold = 15,
    color = c(0, 0, 255),
    strokeWidth = 5
  )
)

properties <- list(
  contours = contours,
  cellSize = 200,
  elevationScale = 4,
  getPosition = ~lng + lat
)

deck <- deckgl(zoom = 10.5, pitch = 30) \%>\%
  add_contour_layer(data = sf_bike_parking, properties = properties) \%>\%
  add_basemap()

if (interactive()) deck
}
\seealso{
\url{https://deck.gl/#/documentation/deckgl-api-reference/layers/contour-layer}
}
