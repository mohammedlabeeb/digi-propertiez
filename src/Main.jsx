import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import indexRoutes from "routes/index.jsx";
import globalTranslations from "./translations/en/global.json";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "French", code: "fr" }
      ],
      translation: globalTranslations,
      options: { defaultLanguage: "en",
      renderToStaticMarkup: renderToStaticMarkup }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default withLocalize(Main);