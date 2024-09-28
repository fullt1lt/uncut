import "./Activity.scss";
import { useTranslation } from "react-i18next";
import activity_ua from "../../../../assets/icon/activity_ua.svg";
import activity_en from "../../../../assets/icon/activity_en.svg";
import ActivityContainer from "./components/Activity_Container";

export default function Activity() {
  const { t } = useTranslation("activity");
  // const activityContainer = t("activityContainer", { returnObjects: true });
  return (
    <>
      <section className="Main_Activity">
        <ul className="Main_Activity_Header_List">
          <li className="Main_Activity_Header_item">
            <h1 className="ActivityHeader">{t("activityHeader")}</h1>
          </li>
        </ul>
        <ActivityContainer/>
        <ul className="Activity_Info_list">
          <li className="Activity_Info_item_Image">
            <img
              src={`${t("activityImage") === "ua" ? activity_ua : activity_en}`}
              alt=""
              className="Activity_Info_Image"
            />
          </li>
          <li className="Activity_Info_item_Text">
            <p className="Activity_Info_Text">{t("activityInfo")}</p>
          </li>
        </ul>
      </section>
    </>
  );
}
