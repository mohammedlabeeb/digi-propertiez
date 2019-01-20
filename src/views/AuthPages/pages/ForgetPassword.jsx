import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
// @material-ui/icons
import Email from "@material-ui/icons/Email";

// Translations
import { withLocalize, Translate } from 'react-localize-redux';
import { TranslationHelper } from "../../../helpers/translation";

// core components
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
    this.translationHelper = new TranslationHelper();
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  render() {
    const { classes } = this.props;
    this.translationHelper.addTranslationsForActiveLanguage(this.props,'auth');
    return (
      <Card className={classes[this.state.cardAnimaton]}>
        <form className={classes.form}>
          <CardHeader color="primary" className={classes.cardHeader}>
            <h4><Translate id="forget.title" >Register</Translate></h4>
          </CardHeader>
          <CardBody>            
            <CustomInput
              labelText={<Translate id="authCommon.EmailLabel" >Email...</Translate>}
              id="email"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "email",
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
          </CardBody>
          <CardFooter className={classes.cardFooter}>
            <div><Button simple color="primary" size="lg" onClick={this.validateLogin}>
              {<Translate id="forget.button" >Reset Password</Translate>}
            </Button></div>
            <div className={classes.footerLinks}>
              <Link to={"/auth/register"} className={classes.link}>
              {<Translate id="authCommon.registerLink" >Create an account</Translate>}
              </Link>
              <Link to={"/auth/login"} className={classes.link}>
              {<Translate id="authCommon.loginLink" >Already have an account?</Translate>}
              </Link> 
            </div>      
          </CardFooter>
        </form>
      </Card>
    );
  }
  
}

export default withStyles(loginPageStyle)(ForgetPassword);
