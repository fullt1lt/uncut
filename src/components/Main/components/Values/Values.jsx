import "./Values.scss";
import { useTranslation } from "react-i18next";

export default function Values() {
  const { t } = useTranslation("values");
  const valuesContainer = t("valuesContainer", { returnObjects: true });
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
        <ul className="Values_Container">
        {valuesContainer.map((item, index) => (
          <li key={index} className="Values_Container_Item">
            <h2 className="ContainerHeader">{item.containerHeader}</h2>
            <p className="ContainerInfo">{item.containerInfo}</p>
          </li>
        ))}
      </ul>
      </section>
    </>
  );
}
