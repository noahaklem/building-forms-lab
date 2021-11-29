import React from 'react';

const Bands = ({ bands }) => {
  const theBands = bands.map((band, index) => {
    return (
      <li key={index}>{band.name}</li>
    )
  })
  return (
    <div>{theBands}</div>
  )
}

export default Bands