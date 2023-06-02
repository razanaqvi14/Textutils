import "./App.css";
import { Navbar } from "./Components/Navbar";
import { TextForm } from "./Components/TextForm";
import { DismissingAlert } from "./Components/DismissingAlert";
import { Footer } from "./Components/Footer";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState("light");
  const [className, setClassName] = useState("fa-solid fa-sun");
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState("lightBlue");
  const [navbarStyle, setNavbarStyle] = useState({});

  const setThemeColor = (theme) => {
    setTheme({
      theme: theme,
    });
    document.body.style.backgroundColor = "#e3f2fd";
    showAlert("success", "Light Blue Theme has been enabled");
    setNavbarStyle({
      backgroundColor: "linear-gradient(lightblue, lightblue)",
      textColor: "black",
    });
    document.body.style.color = "black";
  };

  const showAlert = (alertType, alertMessage) => {
    setAlert({
      alertMessage: alertMessage,
      alertType: alertType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      setClassName("fa-solid fa-moon");
      document.body.style.backgroundColor = "rgb(33 37 41 / 95%)";
      document.body.style.color = "white";
      showAlert("success", "Dark Mode has been successfully enabled");
      setNavbarStyle({});
      setTheme("");
    } else {
      setMode("light");
      setClassName("fa-solid fa-sun");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("success", "Light Mode has been successfully enabled");
      setNavbarStyle({});
      setTheme("");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        changeMode={changeMode}
        className={className}
        showAlert={showAlert}
        setThemeColor={setThemeColor}
        navbarStyle={navbarStyle}
      />
      <DismissingAlert alert={alert} />
      <TextForm
        mode={mode}
        showAlert={showAlert}
        theme={theme}
        navbarStyle={navbarStyle}
      />
      <Footer mode={mode} />
    </>
  );
};

export default App;
