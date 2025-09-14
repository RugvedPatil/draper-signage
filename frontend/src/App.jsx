// Lib
import { Router, Route } from "@solidjs/router"
import "typeface-poppins";
import "@fontsource/plus-jakarta-sans"

// Pages
import { Home, Settings, Sysinfo } from "./pages/import"

function App() {
  return (
    <Router>
      <Route path="/" component={Home}></Route>
      <Route path="/settings" component={Settings}></Route>
      <Route path="/sysinfo" component={Sysinfo}></Route>
    </Router>
  );
}

export default App;
