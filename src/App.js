import React from "react";

// Set up all routes in App
import { Route } from "react-router-dom";

// Using custom styled components from Global folder in components
import { AppWrapper } from "bushido-strap";

// Importing all routes
import Dashboard from "./views/Dashboard";
import ReduxCounter from "./views/ReduxCounter";

import WebFont from "webfontloader";

const headFont = "Uncial Antiqua";
const regFont = "Mukta";

WebFont.load({
  google: {
    families: [`${headFont}`, `${regFont}`]
  }
});

const img_url =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F04%2F10%2F227515-artwork-fantasy_art-digital_art-clouds-horizon.jpg&f=1&nofb=1";

export default function App() {
  return (
    <AppWrapper
      bg_url={`${img_url}`}
      head_font={`${headFont}`}
      font={`${regFont}`}
    >
      <Route path="/" exact component={Dashboard} />
      <Route path="/counter" component={ReduxCounter} />
    </AppWrapper>
  );
}
