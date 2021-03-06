% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/layers_heatmap-layer.R
\name{add_heatmap_layer}
\alias{add_heatmap_layer}
\title{Add a heatmap layer to the deckgl widget}
\usage{
add_heatmap_layer(deckgl, id = "heatmap-layer", data = NULL,
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
The \code{HeatmapLayer} can be used to visualize spatial distribution of data.
It internally implements Gaussian Kernel Density Estimation to render heatmaps.
}
\examples{
## @knitr heatmap-layer
data("sf_bike_parking")

map <- deckgl() \%>\%
  add_heatmap_layer(
    data = sf_bike_parking,
    getPosition = ~lng + lat,
    getWeight = ~spaces
  ) \%>\%
  add_mapbox_basemap()

if (interactive()) map
}
\seealso{
\url{https://deck.gl/#/documentation/deckgl-api-reference/layers/heatmap-layer}
}
