import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import logo from "/logo.svg";
import arrow_down from "/icon/down-arrow.png";
import MainHeader from "./MainHeader/MainHeader";

const languages = ["en", "ua"];

function LanguageDropdown({ selectedLanguage, selectLanguage, isOpen, toggleDropdown }) {
  return (
    <li className="Header_Language_item">
      <div onClick={toggleDropdown}>
        {selectedLanguage}
        <img
          src={arrow_down}
          alt="Arrow down"
          className={`Language_arrow_down ${isOpen ? "open" : ""}`}
        />
      </div>
      {isOpen && (
        <ul className="Dropdown">
          {languages.map((language) => (
            <li
              key={language}
              onClick={(e) => {
                e.stopPropagation();
                selectLanguage(language);
              }}
            >
              {language}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ua");
  const { t, i18n } = useTranslation("header");

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const selectLanguage = useCallback(
    (language) => {
      setSelectedLanguage(language);
      i18n.changeLanguage(language);
      setIsOpen(false);
    },
    [i18n]
  );

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
            <LanguageDropdown
              selectedLanguage={selectedLanguage}
              selectLanguage={selectLanguage}
              isOpen={isOpen}
              toggleDropdown={toggleDropdown}
            />
          </ul>
        </li>
      </ul>
      <MainHeader />
    </header>
  );
}
