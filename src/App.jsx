import { Container } from "react-bootstrap";
import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import "./_app.scss";

function App() {
  const [isSidebarVisible, toggleIsSidebarVisible] = useState(false);

  const handleToggleSidebar = () => toggleIsSidebarVisible((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={isSidebarVisible} />
        <Container fluid className="app__main ">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
