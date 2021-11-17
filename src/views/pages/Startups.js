// import { useState } from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
import CompanyCard from "../../components/Cards/CompanyCard";
// core components
import Header from "components/Headers/Header.js";

const startups = [
  {
    id: 1,
    name: "David Davidson",
    company: "Tunedly",
    description: "Met at a party. Will connect with later",
  },
  {
    id: 2,
    name: "Mark Markson",
    company: "Spotify",
    description: "Met at a party. Will connect with later",
  },
  {
    id: 3,
    name: "Judy Judyson",
    company: "Tie socal",
    description: "Met at a party. Will connect with later",
  },
  {
    id: 4,
    name: "James Jameson",
    company: "Metaverse",
    description: "Met at a party. Will connect with later",
  },
  {
    id: 5,
    name: "James Jameson",
    company: "Metaverse",
    description: "Met at a party. Will connect with later",
  },
  {
    id: 6,
    name: "James Jameson",
    company: "Metaverse",
    description: "Met at a party. Will connect with later",
  },
  {
    id: 7,
    name: "James Jameson",
    company: "Metaverse",
    description: "Met at a party. Will connect with later",
  },
];

let startupCards = startups.map((item) => {
  return (
    <Col sm="6">
      <CompanyCard key={item.id} person={item} />
    </Col>
  );
});

const Startups = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Startup List</h3>
              </CardHeader>
              <CardBody>
                <Row>{startupCards}</Row>
              </CardBody>
              <div />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Startups;
