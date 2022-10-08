import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Humidity from "./Humidity";
import Navbar from "../Components/Navbar";

import temp from "./img/tmp.png";
import patm from "./img/patm.png";
import soil from "./img/soil.png";
import hr from "./img/hr.png";

const url = "https://influxTest.santiagohenao97.repl.co/api/temperature";

export default class Dash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataRange: "30d"
    };
  }

  peticionGet = () => {
    fetch(`${url}/${this.state.dataRange}`)
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }))
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    //this.intervalId = setInterval(() => this.peticionGet(), 10000);
    this.peticionGet();
  }

  handleChange = async (e) => {
    await this.setState({
      dataRange: e.target.value
    });
    console.log(this.state.dataRange);
    this.peticionGet();
  };

  render() {
    return (
      <>
        <Navbar />
        <Container className="container">
          <Row>
            <Col xs={6} md={5}>
              <Form.Group className="pl-0" as={Col} controlId="dataRange">
                <Form.Label>Filtrar por:</Form.Label>
                <Form.Control
                  as="select"
                  name="dataRange"
                  onChange={this.handleChange}
                  // defaultValue={}
                  required
                >
                  <option value="30d">30 días</option>
                  <option value="7d">Última Semana</option>
                  <option value="1d">Día</option>
                  <option value="1h">Última hora</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-4">
            <Humidity data="humidity" name="humedad del suelo" icon={soil} />
            <Humidity data="temperature" name="temperatura" icon={temp} />
          </Row>
          <Row>
            <Humidity data="hrelative" name="humedad relativa" icon={hr} />
            <Humidity data="pressure" name="presión atmosférica" icon={patm} />
          </Row>
        </Container>
      </>
    );
  }
}
