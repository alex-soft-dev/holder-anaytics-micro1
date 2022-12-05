import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MenuIcon from "../../../assets/images/icons/menu.svg";
import SearchIcon from "../../../assets/images/icons/search.svg";
import '../../../assets/styles/header.css'; 
import store from "../../../config/Store";

function Header({title}) {
  const [sideBar, setSideBar] = store.useState('sidebar');

  return (
    <div className="Header d-flex">
      <Navbar expand="lg w-100">
        <Container fluid>
            <Navbar.Brand href="#" className="d-flex align-items-center">
                <Image src={MenuIcon} className="me-2" onClick={() => setSideBar(!sideBar)}/>
                <strong className="text-white">{title}</strong>                 
            </Navbar.Brand>
            <div className="d-flex">
              <div className="headerSearchbar me-4 d-flex align-items-center">
                  <Image src={SearchIcon} className="me-2"/>
              </div>
              <Button className="MainButton Connect-Wallet">Connect Wallet</Button>
            </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
 