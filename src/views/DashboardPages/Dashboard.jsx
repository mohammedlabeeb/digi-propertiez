import React from "react";
import { Route } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import DashboardHeader from "./Sections/DashboardHeader";
import Drawer from "@material-ui/core/Drawer";
import { TranslationHelper } from "../../helpers/translation";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
    // this.props.classes.cardFooterItem = "cardFooterItem";
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
    const { classes, match, ...rest } = this.props;
    console.log(this.props);
    return (
      <div className={classes.authOuter}>
        <DashboardHeader/>
        <GridContainer>
              <GridItem xs={12}>
                
                right Conenes
              </GridItem>
            </GridContainer>
          {/* <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                {/* <Route exact path={`${match.path}/`} component={Login} /> }
                
              </GridItem>
            </GridContainer>
          </div> */}
        </div>
    );
  }
}

export default withStyles()(Dashboard);
