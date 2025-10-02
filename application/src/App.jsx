import "typeface-poppins"

import { Route, Router } from "@solidjs/router";
import { Home, NoContent, NoNetwork, Error } from "./pages/import"

import "./App.css";

function App() {
    return (
        <Router>
            <Route component={Home} path="/" />
            <Route component={NoContent} path="/nocontent" />
            <Route component={NoNetwork} path="/nonetwork" />
            <Route component={Error} path="/error" />
        </Router>
    );
}

export default App;
