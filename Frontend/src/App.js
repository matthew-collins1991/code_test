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
import API from './API';

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
  },
  media: {
    display: 'inline-flex',
    justifyContent: 'center',
    width: 80 + '%',
    objectFit: 'cover',
  },
});



class CallBackForm extends React.Component {
  state = {
    fullName: '',
    businessName: '',
    email: '',
    telNumber: '',
    callDate: '',
    callTime: '09:00',
  };

  handleChange = event =>
  this.setState({ [event.target.name]: event.target.value });

  handleSubmitClick = () => {
    const { fullName, businessName, email, telNumber, callDate, callTime } = this.state;
    const user = {
      name: fullName, 
      business: businessName, 
      email: email, 
      telephone: 
      telNumber, 
      date: callDate, 
      time: callTime
    }
    API.createUser(user).then(data => {
      if (data.error) {
        alert("something is wrong, please try again later.");
      } else {
        alert("Thank you for Submitting your information! MakeItCheaper will get back to you.")
      }
    });
  }
  

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} className={classes.cardGrid}>
          <Card className={classes.card}>
          <CardMedia
          component="img"
          alt="makeItCheaperLogo"
          className={classes.media}
          height="160"
          image="/makeItCheaperLogo.jpeg"
          title="makeItCheaperLogo"
        />
          <form className={classes.container}>
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
        id="date"
        label="Select a Date:"
        type="date"
        name="callDate"
        value={this.state.callDate}
        onChange={this.handleChange}
        className={classes.textField}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
        </Grid>
        <Grid item xs={12}>
        <TextField
        id="time"
        label="Select a Time"
        type="time"
        defaultValue={this.state.callTime}
        className={classes.textField}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: '09:00',
          max: '17:00',
          step: 1800, // 30 min
        }}
      />
        </Grid>
        <Grid item xs={12}>
        <Button 
        style={{marginTop: 20 + 'px'}}
        variant="outlined" className={classes.button}
        onClick={this.handleSubmitClick}
        margin="normal"
        >
        Submit
        </Button>
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