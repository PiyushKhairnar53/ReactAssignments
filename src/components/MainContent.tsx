import React from "react";
import Navbar from "./navbar";
import NavPage from "./NavPages";
import Sidebar from './Sidebar'
import '../App.css'
import '../index.css'
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MainContent = () => {
  return (
    <div>
      <React.Fragment>
        <div>
          <Navbar />
        </div>

        <div >
          <Row className="h-100 m-0">
            <Col className="sidebar-size" sm={2}>
              <Sidebar />
            </Col>
            <Col className="main-content" sm={9}>
              <NavPage />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    </div>
  );
};

export default MainContent;