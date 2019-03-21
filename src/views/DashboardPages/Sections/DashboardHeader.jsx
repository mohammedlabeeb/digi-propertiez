import React, { Component } from 'react';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import { withLocalize, Translate } from 'react-localize-redux';

import dashboardHeaderStyles from 'assets/jss/material-kit-react/views/dashboard/dashboardHeader.jsx';
import profileImage from "assets/img/faces/avatar.jpg";

import Navigation from './Navigation';

import * as appConstants from "../../../constants/appConstants";

class DashboardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftMenuOpen: false
    };
    this.handleLeftMenuToggle = this.handleLeftMenuToggle.bind(this);
  }
  handleLeftMenuToggle() {
    this.setState({ leftMenuOpen: !this.state.leftMenuOpen });
  }
    render() {
      // this.translationHelper.addTranslationsForActiveLanguage(this.props,'dashboard');
      const { classes } = this.props;
      const rightLinks = 
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Discover
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Wishlist
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              justIcon
              round
              href="#pablo"
              className={classes.notificationNavLink}
              onClick={e => e.preventDefault()}
              color="rose"
            >
              <Email className={classes.icons} />
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              left
              caret={false}
              hoverColor="black"
              dropdownHeader="Dropdown Header"
              buttonText={
                <img
                  src={profileImage}
                  className={classes.img}
                  alt="profile"
                />
              }
              buttonProps={{
                className:
                  classes.navLink + " " + classes.imageDropdownButton,
                color: "transparent"
              }}
              dropdownList={[
                "Me",
                "Settings and other stuff",
                "Sign out"
              ]}
            />
          </ListItem>
        </List>;
      
      return (          
            <section>
              <Drawer
            variant="temporary"
            anchor={"left"}
            open={this.state.leftMenuOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleLeftMenuToggle}
          >
            <div>
              <Navigation />
            </div>
          </Drawer>
          <Header
              brand={appConstants.BRAND_NAME}
              color="dark"
              leftLinks={
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleLeftMenuToggle}
              >
                <Menu />
              </IconButton>
              }
              rightLinks={rightLinks}              
            />
              </section>
        );
    }
}

export default withLocalize(withStyles(dashboardHeaderStyles)(DashboardHeader));