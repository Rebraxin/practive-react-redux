import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPeoples } from '../../actions/peopleAction'

const SwapiScreen = () => {
  const dispatch = useDispatch()

  const peopleList = useSelector((state) => state.peopleList)
  const { loading, error, peoples } = peopleList

  useEffect(() => {
    dispatch(listPeoples())
  }, [dispatch])

  return (
    <div>
      {loading && (<p>loading...</p>)}
      {error && (<p>{error}</p>)}
      {peoples.films && (
        <>
          <h3>Nom : {peoples.name}</h3>
          <h3>Poid : {peoples.height}</h3>
          <h3>Yeux couleur : {peoples.eye_color}</h3>
          <h3>Naissance : {peoples.birth_year}</h3>
          {peoples.films.map((f, i) => (
            <p key={i}>{f}</p>
          ))}
        </>
      )}
    </div>
  )
}

export default SwapiScreen
