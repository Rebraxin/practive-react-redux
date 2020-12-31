import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailPeople } from '../../actions/peopleAction'
import Loading from '../../component/Loading'

const SwapiScreen = () => {
  const dispatch = useDispatch()

  const peopleDetails = useSelector((state) => state.peopleDetails)
  const { loading, error, details } = peopleDetails

  useEffect(() => {
    dispatch(detailPeople())
  }, [dispatch])

  return (
    <div>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {details.films && (
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography variant="h4">Nom : {details.name}</Typography>
              <Typography variant="h4">Poid : {details.height}</Typography>
              <Typography variant="h4">
                Yeux couleur : {details.eye_color}
              </Typography>
              <Typography variant="h4">
                Naissance : {details.birth_year}
              </Typography>
              {details.films.map((f, i) => (
                <Typography key={i}>{f}</Typography>
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  )
}

export default SwapiScreen
