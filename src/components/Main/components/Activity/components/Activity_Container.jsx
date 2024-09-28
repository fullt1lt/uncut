import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function ActivityContainer() {
  const [category, setCategory] = useState(null);
  const savedLanguage = Cookies.get("selectedLanguage") || "ua";
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/servise-category/")
      .then((response) => {
          setCategory(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the service category!",
          error
        );
      });
  }, []);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="Activity_Container">
      {category.map((categoryItem, index) => (
        <li key={index} className="Activity_Container_Item">
          <h2 className="ContainerHeader">
            {savedLanguage === "en" ? categoryItem.title_en : categoryItem.title_uk}
          </h2>
          {categoryItem.procedures.map((procedure, procedureIndex) => (
            <p key={procedureIndex} className="ContainerInfo">
              - {savedLanguage === "en" ? procedure.name_en : procedure.name_uk}
            </p>
          ))}
        </li>
      ))}
    </ul>
  );
}
