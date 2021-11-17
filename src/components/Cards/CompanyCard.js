import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const CompanyCard = (props) => {
  const { id, name, company, description } = props.person;

  return (
    <div>
      {/* <Card>
          <CardBody>
            <CardTitle>{name}, {id}</CardTitle>
            <CardSubtitle>{company}</CardSubtitle>
            <CardText>{description}</CardText>
            </CardBody>
        </Card> */}
      <Card className="card-stats mb-4 mb-xl-0">
        <CardBody>
          <Row style={{ marginBottom: 20 }}>
            <div className="col">
              <Row
                className="row"
                style={{
                  flexFlow: "wrap",
                  flexDirection: "row",
                  justifyItems: "left",
                }}
              >
                <div className="icon icon-shape rounded-circle ">
                  <i
                    class="fab fa-spotify"
                    style={{ color: "#1DB954", fontSize: 40 }}
                  />
                </div>
                <CardTitle
                  className="h1 font-weight-bold mb-0"
                  style={{ marginInline: 10 }}
                >
                  {company}
                </CardTitle>
                <div className="icon icon-shape rounded-circle ">
                  <i class="fas fa-flag-usa" />
                </div>
              </Row>
            </div>
            <Col className="col-auto" style={{ flexDirection: "row-reverse" }}>
              <Row
                className="row"
                style={{
                  justifyContent: "space-between",
                  paddingLeft: 20,
                }}
              >
                <button class="btn btn-raised btn-sm shadow my-button w-xs white">
                  <i className="far fa-star" style={{ color: "yellow" }} />
                  4.5
                </button>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-edit" />
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Row>
            </Col>
          </Row>
          <Row>
            <div className="col">
              <Row className="row" style={{ marginTop: 20 }}>
                <CardText className="mt-1 mb-0 text-muted text-sm">
                  <span className="text-dark mr-2">Funding Type {":"}</span>{" "}
                  <span className="text-nowrap">Late Seed</span>
                </CardText>
                <CardText className="mt-1 mb-0 text-muted text-sm">
                  <span className="text-dark mr-2">Funding Type {":"}</span>{" "}
                  <span className="text-nowrap">Late Seed</span>
                </CardText>
                <CardText className="mt-1 mb-0 text-muted text-sm">
                  <span className="text-dark mr-2">Funding Type {":"}</span>{" "}
                  <span className="text-nowrap">Late Seed</span>
                </CardText>
              </Row>
            </div>
            <Col className="col">
              <Row
                className="row"
                style={{
                  justifyContent: "space-between",
                  paddingInline: 20,
                }}
              >
                <span class="badge badge-pill badge-info">lifestyle</span>
                <span class="badge badge-pill badge-info">music</span>
                <span class="badge badge-pill badge-info">social</span>
              </Row>
              <Col
                className="col"
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row-reverse",
                  marginTop: 20,
                  spaddingInline: 20,
                }}
              >
                <Row className="row">
                  <p className="mt-1 mb-0 text-muted text-sm">
                    <span className=" font-weight-bold mr-2">
                      Updated 1 week ago
                    </span>{" "}
                  </p>
                </Row>
                <Row className="row">
                  <p className="mt-1 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <i className="far fa-check-square" />{" "}
                    </span>
                    <span className="text-nowrap">Active</span>
                  </p>
                </Row>
              </Col>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <br />
    </div>
  );
};

export default CompanyCard;
