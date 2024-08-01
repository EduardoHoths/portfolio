import React from "react";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function Header() {
  return (
    <header className="flex flex-wrap justify-between py-10">
      <LanguageSelector />
      <ToggleDarkMode />
    </header>
  );
}

export default Header;
