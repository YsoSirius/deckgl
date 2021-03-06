% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/deckgl.R
\name{deckgl}
\alias{deckgl}
\title{Create a deckgl widget}
\usage{
deckgl(latitude = 37.8, longitude = -122.45, zoom = 12, pitch = 0,
  bearing = 0, initialViewState = NULL, views = NULL, width = NULL,
  height = NULL, elementId = NULL, ...)
}
\arguments{
\item{latitude}{latitude of the initial view state}

\item{longitude}{longitude of the initial view state}

\item{zoom}{zoom of the initial view state}

\item{pitch}{pitch of the initial view state}

\item{bearing}{bearing of the initial view state}

\item{initialViewState}{initial view state,
if set, other view state arguments (\code{longitude}, \code{latidude} etc.) are ignored}

\item{views}{a single \code{View}, or an array of \code{View} instances,
if not supplied, a single \code{MapView} will be created}

\item{width}{width of the widget}

\item{height}{height of the widget}

\item{elementId}{explicit element id (usually not needed)}

\item{...}{optional properties passed to the deck instance}
}
\value{
deckgl widget
}
\description{
Create a deckgl widget
}
\seealso{
\url{https://deck.gl/#/documentation/deckgl-api-reference/deck}
}
