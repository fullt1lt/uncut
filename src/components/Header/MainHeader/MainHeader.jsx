import MainButton from "../../MainButton/MainButton";
import "./MainHeader.scss";
import telegram from "../../../assets/icon/telegram.svg";
import instagram from "../../../assets/icon/instagram.svg";
import youtube from "../../../assets/icon/youtube.svg";
import { useTranslation } from "react-i18next";

export default function MainHeader() {
  const { t } = useTranslation();
  return (
    <ul className="MainHeaderInfo_list">
      <li className="Info_phone_number">
        <span>+380992764663</span>
      </li>
      <li className="Info_details">
        <ul className="Info_details_list">
          <li className="Info_details_headers">
            <span className="Info_details_MainHeader">{t("main_header")}</span>
            <span className="Info_details_SecondHeader">
              {t("second_header")}
            </span>
          </li>
          <li className="Info_details_button">
            <MainButton>{t("advice")}</MainButton>
          </li>
        </ul>
        <ul className="Info_details_Contacts_list">
          <li className="Info_details_Contacts_item">
            <a href="#">
              <img src={telegram} alt="" />
            </a>
          </li>
          <li className="Info_details_Contacts_item">
            <a href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li className="Info_details_Contacts_item">
            <a href="#">
              <img src={youtube} alt="" className="Last_image" />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
