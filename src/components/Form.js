import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({


formcontainer: {
width: '80%',
margin: 'auto',
border: '1px solid red'
},

  textField: {
    display: 'flex',
    margin: theme.spacing.unit,
    width: '60%',
    // margin: 'auto',
    // float: 'left'
  },
  button: {
    // float:'left',
    margin: theme.spacing.unit
  }
})
const Form = (props) => (
  <form onSubmit={props.fetchNews}>
   <div className="formcontainer">
    <TextField
          id="outlined-with-placeholder"
          label="With placeholder"
          name="countryname"
          placeholder="Placeholder"
          className={props.classes.textField}
          margin="normal"
          variant="outlined"
        />

    <Button
      className={props.classes.button}
      color='primary'
      type='submit'
      variant='raised'
    >
      Get News
    </Button>
    </div>
  </form>
)

Form.propTypes = {
  fetchNews: PropTypes.string
}

export default withStyles(styles)(Form)