import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import API from "./API";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import validator from "validator";
import { styles } from "./formStyle";

class CallBackForm extends React.Component {
  state = {
    fullName: "",
    businessName: "",
    email: "",
    telNumber: "",
    callDateTime: "",
    submitted: false
  };

  fullNameRef = React.createRef();
  businessNameRef = React.createRef();
  emailRef = React.createRef();
  telRef = React.createRef();
  dateRef = React.createRef();


  handleBlur = event => {
    switch (event.target.name) {
      case "fullName":
        this.fullNameRef.current.validate(event.target.value);
        break;
      case "businessName":
        this.businessNameRef.current.validate(event.target.value);
        break;
      case "email":
        this.emailRef.current.validate(event.target.value);
        break;
      case "telNumber":
        this.telRef.current.validate(event.target.value);
        break;
      case "callDateTime":
        this.telRef.current.validate(event.target.value);
        break;
      default:
        return null;
    }
  };

  componentDidMount() {
    // custom rule to check full name is two words
    ValidatorForm.addValidationRule("isFullName", value => {
      if (value.split(" ").length < 2) {
        return false;
      }
      return true;
    });
    // custom rule to check phone number is valid
    ValidatorForm.addValidationRule("isPhoneNumber", number => {
      const isValidPhoneNumber = validator.isMobilePhone(number);
      return isValidPhoneNumber;
    });
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmitClick = () => {
    const {fullName, businessName, email, telNumber, callDateTime } = this.state;
    const user = {
      name: fullName,
      business_name: businessName,
      telephone_number: telNumber,
      email: email,
      contact_time: callDateTime
    };
    // let user know form is submitted
    this.setState({ submitted: true }, () => {
      setTimeout(() => {
        this.setState({ submitted: false });
      }, 4000);
    });
    // submit user data to API
    API.createUser(user).then(data => {
      if (data.errors) {
        alert("something is wrong, please try again later.");
      } else {
        alert(
          "Thank you for Submitting your information! MakeItCheaper will get back to you."
        );
      }
    });
  };

  // set default date for date picker form
  currentDate = () => {
    let date = new Date() 
    let dateParse = date.toISOString().split(':')
    return(dateParse[0]+':00')
  }


  render() {
    const { classes } = this.props;
    const { submitted } = this.state;
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
              <ValidatorForm
                className={classes.container}
                ref="form"
                onSubmit={this.handleSubmitClick}
                instantValidate={false}
              >
                <Grid item xs={12}>
                  <TextValidator
                    id="fullName"
                    label="Full Name"
                    name="fullName"
                    className={classes.textField}
                    ref={this.fullNameRef}
                    onBlur={this.handleBlur}
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    validators={["required", "isFullName"]}
                    errorMessages={[
                      "this field is required",
                      "Full Name should be two words"
                    ]}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    id="standard-name"
                    label="Business Name"
                    name="businessName"
                    ref={this.businessNameRef}
                    onBlur={this.handleBlur}
                    className={classes.textField}
                    value={this.state.businessName}
                    onChange={this.handleChange}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    id="standard-name"
                    label="Email Address"
                    name="email"
                    ref={this.emailRef}
                    onBlur={this.handleBlur}
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required",
                      "email is not valid"
                    ]}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    id="standard-name"
                    label="Telephone Number"
                    type="tel"
                    name="telNumber"
                    className={classes.textField}
                    ref={this.telRef}
                    value={this.state.telNumber}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    validators={["required", "isPhoneNumber"]}
                    errorMessages={[
                      "this field is required",
                      "Please enter a valid phone number"
                    ]}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    id="time"
                    label="Select a Time"
                    type="datetime-local"
                    name="callDateTime"
                    ref={this.dateRef}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    defaultValue={this.currentDate()}
                    className={classes.textField}
                    validators={["required", "isValidDate"]}
                    errorMessages={[
                      "this field is required",
                      "You cannot use a date in the past"
                    ]}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      min: "09:00",
                      max: "17:00",
                      step: 1800 // 30 min
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                  >
                    {(submitted && "Your form is submitted!") ||
                      (!submitted && "Submit")}
                  </Button>
                </Grid>
              </ValidatorForm>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CallBackForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CallBackForm);
