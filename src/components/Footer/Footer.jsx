import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import telegram from "../../assets/icon/telegram.svg";
import instagram from "../../assets/icon/instagram.svg";
import youtube from "../../assets/icon/youtube.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");
  return (
    <>
      <footer>
        <ul className="Footer_list">
          <li className="Footer_Logo_item">
            <ul className="Footer_Logo_item_list">
              <li className="Footer_Logo_item_Info">
                <Link to="/">
                  <img src={logo} alt="Logo" className="Footer_logo" />
                </Link>
                <ul className="Footer_Details_list">
                  <li className="Footer_Details_item">
                    <span className="Footter_Details_Nezkrayu">
                      {t("footer_details_nezkrayu")}
                    </span>
                  </li>
                  <li className="Footer_Details_item">
                    <span className="Footter_Details_Text">
                      {t("footer_details_text")}
                    </span>
                  </li>
                </ul>
              </li>
              <li className="Footer_Logo_item_social_accounts">
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
          </li>
        </ul>
        <ul className="Footer_info_list">
          <li className="Footer_info_Item">
            <span>{t("footer_fop")}</span>
          </li>
          <li className="Footer_info_Item">
            <span>{t("footer_license")}</span>
          </li>
        </ul>
      </footer>
    </>
  );
}
