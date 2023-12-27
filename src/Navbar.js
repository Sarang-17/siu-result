import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="m"
      style={{ background: "#D22B2B" }}
    >
      <div className="">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ marginLeft: "10px" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: "10px" }}>
            <Nav.Link
              href="http://siuexam.siu.edu.in/"
              target="_blank"
              className="listItem"
            >
              TIME TABLE
            </Nav.Link>
            <Nav.Link
              href="http://siuexam.siu.edu.in/cgi-bin/SiuExmReslt.exe/dsprslt?dbnm=siucore"
              target="_blank"
              className="listItem"
            >
              RESULTS
            </Nav.Link>
            <Nav.Link
              href="http://siuexam.siu.edu.in/forms/convo.html"
              target="_blank"
              className="listItem"
            >
              CONVOCATION
            </Nav.Link>
            <Nav.Link
              href="http://siuexam.siu.edu.in/EXAMRULEBOOK-(WEBVERSION).pdf"
              target="_blank"
              className="listItem"
            >
              EXAMINATION RESULTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;

{
  /* <nav
      className="navbar navbar-expand-md navbar-light mt-2"
      style={{ height: "50px", textAlign: "center", background: "#D22B2B" }}
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" style={{ marginLeft: "50px" }}>
          <li className="nav-item listItem">
            <a className="nav-link" href="" style={{ color: "white" }}>
              TIME TABLE
            </a>
          </li>
          <li className="nav-item listItem" style={{ marginLeft: "40px" }}>
            <a className="nav-link" href="" style={{ color: "white" }}>
              RESULTS
            </a>
          </li>
          <li className="nav-item listItem" style={{ marginLeft: "40px" }}>
            <a className="nav-link" href="" style={{ color: "white" }}>
              CONVOCATION
            </a>
          </li>
          <li className="nav-item listItem" style={{ marginLeft: "40px" }}>
            <a className="nav-link" href="" style={{ color: "white" }}>
              EXMAINATION RULES
            </a>
          </li>
        </ul>
      </div>
    </nav> */
}
