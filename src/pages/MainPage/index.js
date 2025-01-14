import React from 'react'
import Banner from '../../components/Banner'
import Row from '../../components/Row'
import requests from '../../api/requests'

export default function MainaPage() {
  return (
    <div>
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      />

      <Row title="Treding Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />

    </div>
  )
}
