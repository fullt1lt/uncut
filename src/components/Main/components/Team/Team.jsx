import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import "./Team.scss";
import axios from "axios";
import Cookies from "js-cookie";
import DetailButton from "../../../DetailButton/DetailButton";

export default function Team() {
  const { t } = useTranslation("team");
  const [team, setTeam] = useState([]);
  const savedLanguage = Cookies.get("selectedLanguage") || "ua";

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/doctors/")
      .then((response) => {
        setTeam(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the service category!",
          error
        );
      });
  }, [savedLanguage]);
  return (
    <>
      <section className="Main_Team">
        <ul className="Main_Team_Header_List">
          <li className="Main_Team_Header_item">
            <h1 className="TeamHeader">{t("TeamHeader")}</h1>
          </li>
        </ul>
        <ul className="Team_Container">
          {team.map((teamitem) => (
            <li key={teamitem.id} className="Team_Container_Item">
              <div className="Conteiner_Doctor_photo">
                <img
                  src={teamitem.photo_small}
                  alt={teamitem.name}
                  className="Doctor_photo"
                />
              </div>
              <h3 className="Doctor_name">
                {savedLanguage === "en" ? teamitem.name_en : teamitem.name_uk}
              </h3>
              <p className="Doctor_specialization">
                {savedLanguage === "en"
                  ? teamitem.specialization_en
                  : teamitem.specialization_uk}
              </p>
              <DetailButton>{t("TeamButton")}</DetailButton>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
