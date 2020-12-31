import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useStyles } from './style';

const Loading = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.spinner} />
    </div>
  )
}

export default Loading
