import { ThemeContext } from "../../context/Context";
import { useContext } from "react";
import "./DarkLight.css";

const DarkLight = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeToggle = () => {
    setTheme((dark) => !dark);
  };

  return (
    <svg className="dark-light-svg" onClick={themeToggle} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.390625 12.5C0.390625 19.1878 5.81216 24.6094 12.5 24.6094C19.1878 24.6094 24.6094 19.1878 24.6094 12.5C24.6094 5.81221 19.1878 0.390625 12.5 0.390625C5.81221 0.390625 0.390625 5.81216 0.390625 12.5ZM12.5 21.4844V3.51562C17.4661 3.51562 21.4844 7.53472 21.4844 12.5C21.4844 17.4661 17.4653 21.4844 12.5 21.4844Z" fill={theme ? "white" : "rgb(100, 100, 100)"} />
    </svg>
  );
};

export default DarkLight;
