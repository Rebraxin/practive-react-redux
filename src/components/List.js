import React from 'react'

const List = ({ films }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {films.map((film, idx) => (
        <li key={idx}>{film}</li>
      ))}
    </ul>
  )
}

export default List
