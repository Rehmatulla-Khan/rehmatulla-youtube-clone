import { Container } from "react-bootstrap";
import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./_app.scss";

const Layout = ({ children }) => {
  const [isSidebarVisible, toggleIsSidebarVisible] = useState(false);

  const handleToggleSidebar = () => toggleIsSidebarVisible((value) => !value);

  return (
    <>
      <Header onToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar isSidebarVisible={isSidebarVisible} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>

        <Route path="/auth" exact>
          <LoginScreen />
        </Route>

        <Route path="/search" exact>
          <Layout>
            <h1>search results</h1>
          </Layout>
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
