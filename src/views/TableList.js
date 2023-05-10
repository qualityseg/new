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
                <Card.Title as="h4">Realizar CheckList</Card.Title>
                <p className="card-category">
                  Clique e seja redirecionado.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
         
                      <th className="border-0">Resultados em Excel</th>
                      <th className="border-0">Resultados em Relatorio</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><a href="https://docs.google.com/spreadsheets/d/1P-iiAjTss4CL95_UM4KJDITLEAbRxSFZhoO7ml_nvFk/edit">Controle de Frota</a></td>
                    <td>Controle de Frota</td>
                  </tr>
                  <tr>
                    <td><a href="https://docs.google.com/spreadsheets/u/1/d/1A__5WacsvBT4hsyCHvaeg4RkWbu4sp55hIa3oFyB8uY/edit?usp=drive_web&ouid=100638025444682813805">Controle de OS</a></td>
                    <td>Controle de OS</td>
                  </tr>
                  
                  <tr>
                    <td><a href="https://docs.google.com/spreadsheets/u/1/d/1egs1KfIhcPOrPupMc1boslzC8vJf2zn1o1jVQcTpxQo/edit?usp=drive_web&ouid=100638025444682813805">CAT</a></td>
                    <td>CAT</td>
                  </tr>
                  <tr>
                    <td><a href="https://app.powerbi.com/view?r=eyJrIjoiZGJmNmNhZDktM2IwOS00MDQzLTgwZWQtZjE4M2ExNjA2ODNhIiwidCI6ImMxNTk2NDVkLTM3ZjUtNDg5Ny1hNTQ5LTNhZDIzMDkyZTdjNyJ9">PGR PCMSO</a></td>
                    <td>PGR PCMSO</td>
                  </tr>
                  <tr>
                    <td><a href="https://docs.google.com/spreadsheets/u/1/d/167te-ALUaBGitIz4xYcFmZdNOmIFMoQVk0PbubFoz54/edit?usp=drive_web&ouid=100638025444682813805">E-Social</a></td>
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
                <Card.Title as="h4">Resultado de CheckList's</Card.Title>
                <p className="card-category">
                  Clique e seja redirecionado.
                </p>
              </Card.Header>
              
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Check List's</th>
                      <th className="border-0">QRCode</th>
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    
                    <td>
                    <a href="https://docs.google.com/spreadsheets/d/1P-iiAjTss4CL95_UM4KJDITLEAbRxSFZhoO7ml_nvFk/edit">Controle de Frota</a></td>
                    <td><img src="https://i.imgur.com/HfZrXAn.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
                    
                  </tr>
                  
                  <tr>
                    <td><a href="https://docs.google.com/spreadsheets/u/1/d/1A__5WacsvBT4hsyCHvaeg4RkWbu4sp55hIa3oFyB8uY/edit?usp=drive_web&ouid=100638025444682813805">Controle de OS</a></td>
                    <td><img src="https://i.imgur.com/HfZrXAn.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
                  </tr>
                  <tr>
                    <td><a href="https://docs.google.com/spreadsheets/u/1/d/1egs1KfIhcPOrPupMc1boslzC8vJf2zn1o1jVQcTpxQo/edit?usp=drive_web&ouid=100638025444682813805">CAT</a></td>
                    <td><img src="https://i.imgur.com/HfZrXAn.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
                  </tr>
                  <tr>
                    <td><a href="https://app.powerbi.com/view?r=eyJrIjoiZGJmNmNhZDktM2IwOS00MDQzLTgwZWQtZjE4M2ExNjA2ODNhIiwidCI6ImMxNTk2NDVkLTM3ZjUtNDg5Ny1hNTQ5LTNhZDIzMDkyZTdjNyJ9">PGR PCMSO</a></td>
                    <td><img src="https://i.imgur.com/HfZrXAn.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
                  </tr>
                  <tr>
                    <td><a href="https://docs.google.com/spreadsheets/u/1/d/167te-ALUaBGitIz4xYcFmZdNOmIFMoQVk0PbubFoz54/edit?usp=drive_web&ouid=100638025444682813805">E-Social</a></td>
                    <td><img src="https://i.imgur.com/HfZrXAn.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
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
