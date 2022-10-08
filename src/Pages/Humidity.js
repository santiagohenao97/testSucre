import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Chart from "../Components/Chart";
import moment from "moment";

export default class Dash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataRange: "30d"
    };
  }

  peticionGet = (props) => {
    console.log("peticionnnnnn");
    console.log(this.props.data);
    const url = "https://influxTest.santiagohenao97.repl.co/api";
    fetch(`${url}/${this.props.data}/${this.state.dataRange}`)
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
    //console.log(this.state.dataRange);
    this.peticionGet();
  };

  render() {
    return (
      <>
        <Col xs={12} md={6}>
          <Chart
            data={this.state.data}
            dataKey="_value"
            variable="Humedad del suelo"
            titulo={this.props.name}
            time={this.state._time}
            icon={this.props.icon}
          />
        </Col>
      </>
    );
  }
}
