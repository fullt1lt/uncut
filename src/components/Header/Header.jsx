import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import logo from "/logo.svg";
import arrow_down from "/icon/down-arrow.png";
import MainHeader from "./MainHeader/MainHeader";

const languages = ["en", "ua"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ua");
  const { t, i18n } = useTranslation("header");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <header>
      <ul className="Header_list">
        <li className="Header_Logo_item">
          <img src={logo} alt="Logo" />
        </li>
        <li className="Header_Navigation_item">
          <ul className="Header_Navigation_list">
            <li className="Header_Navigation_list_item">
              <a href="#">{t("values")}</a>
            </li>
            <li className="Header_Navigation_list_item">
              <a href="#">{t("services")}</a>
            </li>
            <li className="Header_Navigation_list_item">
              <a href="#">{t("activities")}</a>
            </li>
            <li className="Header_Navigation_list_item">
              <a href="#">{t("team")}</a>
            </li>
            <li className="Header_Navigation_list_item">
              <a href="#">{t("contacts")}</a>
            </li>
          </ul>
          <ul className="Header_Language_list">
            <li className="Header_Language_item" onClick={toggleDropdown}>
              {selectedLanguage}
              <img
                src={arrow_down}
                alt="Arrow down"
                className={`Language_arrow_down ${isOpen ? "open" : ""}`}
              />
              {isOpen && (
                <ul className="Dropdown">
                  {languages.map((language) => (
                    <li key={language} onClick={() => selectLanguage(language)}>
                      {language}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </li>
      </ul>
      <MainHeader />
    </header>
  );
}
