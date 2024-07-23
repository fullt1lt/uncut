import DetailButton from "../../../DetailButton/DetailButton";
import "./Services.scss";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation("services");
  const servicesContainer = t("servicesContainer", { returnObjects: true });
  return (
    <>
      <section className="Main_Services">
        <ul className="Main_Services_Header_List">
          <li className="Main_Services_Header_item">
            <h1 className="ServicesHeader">{t("servicesHeader")}</h1>
          </li>
        </ul>
        <ul className="Services_Container">
          {servicesContainer.map((item, index) => (
            <li key={index} className="Services_Container_Item">
              <h2 className="ContainerHeader">{item.containerHeader}</h2>
              <p className="ContainerInfo">{item.containerInfo}</p>
              <DetailButton>
                {t("servicesButton")}
              </DetailButton>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
