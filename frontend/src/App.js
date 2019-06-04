import React, { Component } from "react";
import pic1 from "./pics/hosp5.jpg";
import pic2 from "./pics/hosp6.jpg";
import pic3 from "./pics/jef back.jpg";
import pic4 from "./pics/jefprofile.jpg";
import pic5 from "./pics/leo.jpg";
import Navbar from "./components/Navbar";
import "./App.css";
class Option extends React.Component {
  render() {
    return (
      <div>
        <a
          href="#"
          onClick={this.props.triggerProcess}
          className="btn btn-block  p-2 mt-2"
          style={{ background: "lightblue" }}
        >
          {this.props.optionValue}
        </a>
      </div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      alerta: false,
      currentBird: {},
      certo: 0,
      errado: 0,

      valendoJogo: false,
      birds: [
        {
          id: 1,
          picture: pic1,
          especie: "leo",
          familia: "neshich",
          nome_comum: "vukk"
        },
        {
          id: 2,
          picture: pic2,
          especie: "nina",
          familia: "neshich",
          nome_comum: "ninoca"
        },
        {
          id: 3,
          picture: pic3,
          especie: "goran",
          familia: "neshich",
          nome_comum: "pai"
        },
        {
          id: 4,
          picture: pic4,
          especie: "damares",
          familia: "monte",
          nome_comum: "dama"
        },
        {
          id: 5,
          picture: pic5,
          especie: "ccccccccc",
          familia: "castelo",
          nome_comum: "mah"
        },
        {
          id: 7,
          picture: pic5,
          especie: "bbbbbbbb",
          familia: "castelo",
          nome_comum: "mah"
        },
        {
          id: 8,
          picture: pic5,
          especie: "aaaaaaaaaa",
          familia: "castelo",
          nome_comum: "mah"
        },
        {
          id: 9,
          picture: pic5,
          especie: "sdfdasfa",
          familia: "castelo",
          nome_comum: "mah"
        },
        {
          id: 10,
          picture: pic5,
          especie: "marrrrrina",
          familia: "castelo",
          nome_comum: "mah"
        },
        {
          id: 11,
          picture: pic5,
          especie: "mariasnad",
          familia: "castelo",
          nome_comum: "mah"
        },
        {
          id: 6,
          picture: pic5,
          especie: "sei la",
          familia: "castelo",
          nome_comum: "sss"
        }
      ],
      random: 0
    };
  }
  reiniciarJogo = e => {
    this.setState({
      currentIndex: 0,
      alerta: false,
      certo: 0,
      errado: 0,
      valendoJogo: false
    });
  };
  startGame = e => {
    const min = 0;
    const max = 5;
    const rand = Math.floor(Math.random() * max + min);
    this.setState({
      random: rand,
      certo: 0,
      errado: 0,
      currentIndex: 0,
      alerta: false,
      valendoJogo: true,
      currentBird: this.state.birds[rand]
    });
  };
  adivinharResposta = e => {
    if (this.state.currentIndex + 1 === 6) {
      this.setState({
        alerta: true,
        valendoJogo: false
      });

      return;
    }
    // For accomplishing a better readible equality-check.
    let answer = e.target.textContent;

    let correctAnswer = this.state.currentBird.especie;

    if (answer === correctAnswer) {
      this.setState({ certo: this.state.certo + 1 });
    } else {
      this.setState({ errado: this.state.errado + 1 });
    }

    this.setState({ currentIndex: this.state.currentIndex + 1 });
    const rand = Math.floor(Math.random() * 5 + 0);
    this.setState({ currentBird: this.state.birds[rand], random: rand });
  };

  render() {
    const {
      valendoJogo,
      certo,
      errado,
      currentIndex,
      random,
      birds
    } = this.state;
    let valendoConteudo;
    var options = [];
    if (valendoJogo) {
      for (let i = random; i < random + 4; i++) {
        options.push(
          <Option
            optionValue={this.state.birds[i].especie}
            triggerProcess={this.adivinharResposta}
            activeGame={this.state.valendoJogo}
          />
        );
      }
      valendoConteudo = (
        <div>
          <div className="card ml-auto mr-auto" style={{ width: "90%" }}>
            <img
              src={this.state.currentBird.picture}
              style={{ height: "400px", width: "100%" }}
              alt=""
            />
            <div className="card-body">{options}</div>
          </div>

          <div className="respostas" />
        </div>
      );
    }
    console.log(this.state.currentBird);

    return (
      <div className="vh-100">
        <Navbar
          result={this.state.certo}
          start={this.startGame}
          reset={this.startGame}
        />
        {this.state.alerta ? (
          <div className="alert alert-primary" role="alert">
            voce acertou: {this.state.certo}
          </div>
        ) : null}
        <h3 className="text-center mt-3 mb-3">Guess what Bird!</h3>
        {valendoConteudo}
        <div className="certo-errado d-flex justify-center">
          <div className="text-success">Certo : {this.state.certo}</div>
          <div className="text-danger">Errado : {this.state.errado}</div>
        </div>
      </div>
    );
  }
}
