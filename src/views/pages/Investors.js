import React from "react";
// reactstrap components
import { Card, Container, Row } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Investors = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <div style={{ height: `600px` }} className="map-canvas">
                
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Investors;
