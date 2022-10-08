import React, { Component } from "react";
import { Card } from "react-bootstrap";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer
} from "recharts";
import moment from "moment";

export default class Temperatura extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    console.log("HOOOOOOOOLA", this.props._time);
  }

  render() {
    return (
      <Card className="pb-4 chart">
        <Card.Body>
          <Card.Title>
            <img
              src={this.props.icon}
              className="icon"
              alt="A generic square placeholder image with rounded corners in a figure."
            />{" "}
            {this.props.titulo}
          </Card.Title>
          <ResponsiveContainer width="100%" height={"100%"}>
            <AreaChart
              data={this.props.data}
              margin={{ top: 5, right: 60, bottom: 5, left: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey={this.props.dataKey}
                stroke="rgb(106, 10, 229)"
                fill="url(#colorUv)"
              />
              <XAxis dataKey="_time">
                <Label value="Fecha" offset={-5} position="insideBottom" />
              </XAxis>
              <YAxis>
                <Label
                  value={this.props._value}
                  offset={-10}
                  angle={"-90"}
                  position="insideBottomLeft"
                />
              </YAxis>
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
    );
  }
}
