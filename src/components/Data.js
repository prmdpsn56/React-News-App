import React from 'react'

import Grid from '@material-ui/core/Grid';

const Data = (props) => (

  <Grid container spacing={24}>
   

  <Grid item xs={6}>

  {
     props.Imageurl &&
      <p className='notdefinedyet'>
       <img src={props.Imageurl} alt="articleimage"/>
      </p>
    }

</Grid>
  <Grid item xs={6}>

  <div className='news__info'>
    {
     props.Author &&
      <p className='notdefinedyet'>
        Author: <span>{props.Author}</span>
      </p>
    }
    {
      props.Title &&
      <p className='notdefinedyet'>
        Title: {props.Title}
      </p>
    }
    {
      props.Description &&
      <p className='notdefinedyet'>
   Description: {props.Description}
      </p>
    }
  
    {
      props.Publishedat &&
      <p className='notdefinedyet'>
        Published At: {props.Publishedat}
      </p>
    }
    {
      props.Content &&
      <p className='notdefinedyet'>
        Content: {props.Content}
      </p>
    }
  
  </div>

  </Grid>
  

  </Grid>


)

export default Data