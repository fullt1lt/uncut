import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";


export default function ActivityContainer() {
  const [category, setCategory] = useState([]);
  const savedLanguage = Cookies.get("selectedLanguage") || "ua";

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/category-activity/")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the service category!",
          error
        );
      });
  }, [savedLanguage]);

  const cleanText = (text) => {
    return text
      .split("-")
      .filter(Boolean)
      .map((item) => item.trim());
  };

  if (!category.length) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="Activity_Container">
      {category.map((categoryItem, index) => (
        <li key={index} className="Activity_Container_Item">
          <h2 className="ContainerHeader">
            {savedLanguage === "en"
              ? categoryItem.title_en
              : categoryItem.title_uk}
          </h2>
            {(savedLanguage === "en"
              ? cleanText(categoryItem.procedures[0].text_en)
              : cleanText(categoryItem.procedures[0].text_uk)
            ).map((item, i) => (
              <p key={i} className="ContainerInfo">- {item}</p>
            ))}
        </li>
      ))}
    </ul>
  );
}
