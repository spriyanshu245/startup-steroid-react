import React from "react";
// reactstrap components
import { Card, Container, Row } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import CalendarChild from "../../components/Cards/CalendarChild";

const Partners = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <div class="d-flex align-items-center flex-column text-primary">
              <h1 class="text-white text-uppercase fw-bold s:fw-heavy lh-tight mb-2 medium">
                Assume this as Child Login View
              </h1>
            </div>
            <Card className="shadow border-0">
              <div style={{ height: `600px` }} className="map-canvas">
                <Card className="shadow">
                  <CalendarChild />
                </Card>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Partners;
