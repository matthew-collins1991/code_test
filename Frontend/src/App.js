import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  card: {
    maxWidth: 40+'%',
    padding: 20,
    textAlign: 'center',
  },
  cardGrid:{
    display: 'inline-flex',
    justifyContent: 'center',
    marginTop: 50,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 90+'%',
  },
  dense: {
    marginTop: 19,
  } 
});



class CallBackForm extends React.Component {
  state = {
    fullName: '',
    businessName: '',
    email: '',
    telNumber: '',
    callDate: '',
    callTime: '',
  };

  handleChange = event =>
  this.setState({ [event.target.name]: event.target.value });

  

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} className={classes.cardGrid}>
          <Card className={classes.card}>
          <form className={classes.container} noValidate autoComplete="off">
          <Grid item xs={12}>
        <TextField
          id="standard-name"
          label="Full Name"
          name="fullName"
          className={classes.textField}
          value={this.state.fullName}
          onChange={this.handleChange}
          margin="normal"
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="standard-name"
          label="Business Name"
          name="businessName"
          className={classes.textField}
          value={this.state.businessName}
          onChange={this.handleChange}
          margin="normal"
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="standard-name"
          label="Email Address"
          name="email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange}
          margin="normal"
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="standard-name"
          label="Telephone Number"
          name="telNumber"
          className={classes.textField}
          value={this.state.telNumber}
          onChange={this.handleChange}
          margin="normal"
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="standard-name"
          label="Select a date:"
          name="callDate"
          className={classes.textField}
          value={this.state.CallDate}
          onChange={this.handleChange}
          margin="normal"
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="standard-name"
          label="Select a time:"
          name="callTime"
          className={classes.textField}
          value={this.state.callTime}
          onChange={this.handleChange}
          margin="normal"
        />
        </Grid>
      </form>
          </Card>
        </Grid>
      </Grid>
      </div>
      
    );
  }
}

CallBackForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CallBackForm);