import { useContext, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Container,
  Image,
  Row,
  ToggleButton,
} from "react-bootstrap";
import { ThemeContext } from "../../../App";
import Switch from "react-js-switch";
import "../../../assets/styles/global.css";
import "../../../assets/styles/sidebar.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import DashboardIcon from "../../../assets/images/icons/dashboard.svg";
import CollectionsIcon from "../../../assets/images/icons/ranking.svg";
import MintsIcon from "../../../assets/images/icons/mints.svg";
import TradeIcon from "../../../assets/images/icons/trade.svg";
import FollowingIcon from "../../../assets/images/icons/following.svg";
import PortfolioIcon from "../../../assets/images/icons/portfolio.svg";
import ExtensionIcon from "../../../assets/images/icons/extension.svg";
import LightIcon from "../../../assets/images/icons/light.svg";
import DarkIcon from "../../../assets/images/icons/dark.svg";
import BannerBg from "../../../assets/images/banner/bannerBg.png";
import BlackLogo from "../../../assets/images/banner/blacklogo.svg";
import Backlogo from "../../../assets/images/bg_logo.svg";
import store from "../../../config/Store";

function Sidebar() {
  const [sidebar, setSidebar] = store.useState("sidebar");

  const theme = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);
  const [themeMode, setThemeMode] = useState("Dark");

  const switch_onChange_handle = () => {
    setChecked(!checked);
  };

  const themeValues = [
    { name: "Light", value: "Light", icon: LightIcon },
    { name: "Dark", value: "Dard", icon: DarkIcon },
  ];

  const sidebarMenuData = [
    { icon: DashboardIcon, link: "/", title: "Dashboard" },
    { icon: CollectionsIcon, link: "/ranking", title: "Ranking Trending" },
    { icon: MintsIcon, link: "/mints", title: "Mints" },
    { icon: TradeIcon, link: "/trade", title: "Trade" },
    { icon: FollowingIcon, link: "/following", title: "Following" },
    { icon: PortfolioIcon, link: "/porfolio", title: "My Portfolio" },
    { icon: ExtensionIcon, link: "/extension", title: "Extension" },
  ];

  return (
    <div
      className={sidebar == false ? "Sidebar" : "Sidebar-Response"}
      style={{
        background: theme.SidebarBackground,
        color: theme.Color,
        backgroundImage: `url(${Backlogo})`,
        backgroundSize: "100%",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Image src={Logo} style={{ width: 100 }} className="pt-5 pb-4" />
        </Row>
        <div className="SidebarNavList">
          {sidebarMenuData.map((item, idx) => (
            <SidebarNav
              key={idx}
              icon={item.icon}
              link={item.link}
              title={item.title}
            />
          ))}
        </div>
        <div className="ThemeToggleButton d-flex justify-content-center mt-5">
          <ButtonGroup style={{ background: theme.ThemeSelectBackground }}>
            <Button variant="secondary" className="my-1 mx-2">
              <Image src={LightIcon} className="me-2" />
              <span>Light</span>
            </Button>
            <Button variant="secondary" className="my-1 mx-2 active">
              <Image src={DarkIcon} className="me-2" />
              <span>Dark</span>
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </div>
  );
}

const SidebarNav = ({ icon, link, title }) => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Link
      to={link}
      className="d-flex align-items-center SidebarNav"
      aria-selected={pathname === link ? true : false}
      style={{ textDecoration: "none", color: "#ffffff80" }}
    >
      <Image src={icon} className="pe-3" style={{ filter: "invert(0.4)" }} />
      <div className="nav-item">{title}</div>
    </Link>
  );
};

export default Sidebar;
