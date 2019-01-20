import React from "react";
// @material-ui/icons
// core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import { withLocalize } from "react-localize-redux";

class SocialLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes , heading } = this.props;
        return (
            <div>
                <h6 className={classes.socialHeader}>{heading}</h6>
                <div>{this.createButtons()}</div>
            </div>
        );
    }

    createButtons() {
        const { socialMedias } = this.props;
        let buttons = [];
        socialMedias && socialMedias.length && socialMedias.forEach(social => {
            buttons.push(<Button
                color={social}
                size="sm"
                rel="noopener noreferrer"
            >
                {this.getIconAndTitle(social)}
            </Button>)
        })
        return buttons;
    }

    getIconAndTitle(item) {
        let iconAndTitle = '';
        switch (item) {
            case 'facebook': iconAndTitle = <span><i className="fab fa-facebook" /> Facebook</span>; break;
            case 'google': iconAndTitle = <span><i className="fab fa-google" /> Google</span>; break;
            case 'twitter': iconAndTitle = <span><i className="fab fa-twitter" /> Twitter</span>; break;
            default: iconAndTitle = ''; break;
        }
        return iconAndTitle;
    }

}

export default withLocalize(withStyles()(SocialLogin));
