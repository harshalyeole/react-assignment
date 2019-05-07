import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Container, Row } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      backgroundcolor1: 'red',
      backgroundcolor2: 'green',
      backgroundcolor3: 'blue',
      rSelected: 1
    }
  }
  
  changeColor = (input) => {
    this.setState({
      backgroundcolor1: (input === "rgb") ? "red" : ((input === "gbr") ? "green" : "blue"),
      backgroundcolor2: (input === "rgb") ? "green" : ((input === "gbr") ? "blue" : "red"),
      backgroundcolor3: (input === "rgb") ? "blue" : ((input === "gbr") ? "red" : "green"),
      rSelected:  (input === "rgb") ? 1 : ((input === "gbr") ? 2 : 3)
    });
  }

  render() {
    return (
      <div className="App">
        <Container className="rgb-assignment-container">
            <div className="container-title"> Assignment 1: State and Props </div>
            <Row>
              <Col md="4">
                <Button color="danger" block onClick={(e) => this.changeColor("rgb")} active={this.state.rSelected === 1}>RGB</Button>{' '}
              </Col>
              <Col md="4">
                <Button color="success" block onClick={(e) => this.changeColor("gbr")} active={this.state.rSelected === 2}>GBR</Button>{' '}
              </Col>
              <Col md="4">
                <Button color="primary" block onClick={(e) => this.changeColor("brg")} active={this.state.rSelected === 3}>BRG</Button>{' '}
              </Col>
            </Row>
            <Row>
              <Col md="4" className='color-container' >
                <div className='show-colors' style={{backgroundColor: this.state.backgroundcolor1}} />
              </Col>
              <Col md="4" className='color-container' >
                <div className='show-colors' style={{backgroundColor: this.state.backgroundcolor2}} />
              </Col>
              <Col md="4" className='color-container' >
                <div className='show-colors' style={{backgroundColor: this.state.backgroundcolor3}} />
              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default App;