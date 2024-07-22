import "./Values.scss";
import { useTranslation } from "react-i18next";

export default function Values() {
  const { t } = useTranslation("values");
  return (
    <>
      <section className="Main_Values">
        <ul className="Main_Values_Header_List">
          <li className="Main_Values_Header_item">
            <h1 className="ValuesHeader">{t("valuesHeader")}</h1>
          </li>
          <li className="Main_Values_Header_item">
            <span className="ValuesHeaderInfo">{t("valuesHeaderInfo")}</span>
          </li>
        </ul>
      </section>
    </>
  );
}
