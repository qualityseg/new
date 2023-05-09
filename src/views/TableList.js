import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Controle de Frota</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Controle de OS</td>

                    </tr>
                    <tr>
                      <td>3</td>
                      <td>CAT</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>PGR PCMSO</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>E-Social</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>1</td>
                      <td>Controle de Frota</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Controle de OS</td>

                    </tr>
                    <tr>
                      <td>3</td>
                      <td>CAT</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>PGR PCMSO</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>E-Social</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
