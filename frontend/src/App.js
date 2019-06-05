import React, { Component } from "react";
import anaca from "./pics/anaca.jpg";
import anuBranco from "./pics/anu-branco.jpg";
import cardealDaAmazonia from "./pics/cardeal-da-amazonia.jpg";
import chorao from "./pics/chorao.jpeg";
import curicaUrubu from "./pics/curica-urubu.jpg";
import garibaldi from "./pics/garibaldi.jpg";
import sabiaPoca from "./pics/sabia-poca.jpg";
import AnambéDeCoroa from "./pics/AnambéDeCoroa.jpg";
import ArapaçuGalinha from "./pics/ArapaçuGalinha.jpg";
import CantadorEstriado from "./pics/CantadorEstriado.jpg";
import GaviãoDeCaudaCurta from "./pics/GaviãoDeCaudaCurta.jpg";
import IratauáGrande from "./pics/IratauáGrande.jpg";
import PicaPauDeColeira from "./pics/PicaPauDeColeira.jpg";
import PicaPauVerdeBarrado from "./pics/PicaPauVerdeBarrado.jpg";
import TucanoDeBicoPreto from "./pics/tucano-de-bico-preto.jpg";
import TucanoDePapoBranco from "./pics/tucanoDePapoBranco.jpg";

import cambacica from "./pics/cambacica.jpg";
import Jacamaraçu from "./pics/Jacamaraçu.jpg";
import mariquita from "./pics/mariquita.jpg";

import SurucuáPequeno from "./pics/SurucuáPequeno.jpg";
import Tucanaçu from "./pics/Tucanaçu.jpg";

import savacu from "./pics/savacu.jpg";
import trincaFerro from "./pics/trinca-ferro.jpg";
import maritacaDeCabecaAzul from "./pics/maritaca-de-cabeca-azul.jpg";

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
      showEspecie: false,
      especie: "",
      currentIndex: 0,
      alerta: false,
      currentBird: {},
      certo: 0,
      errado: 0,

      valendoJogo: false,
      birds: [
        {
          id: 1,
          picture: anaca,
          nome_comum: "Anacã"
        },
        {
          id: 2,
          picture: anuBranco,

          nome_comum: "Anu-Branco"
        },
        {
          id: 3,
          picture: cardealDaAmazonia,

          nome_comum: "Cardeal-da-Amazonia"
        },
        {
          id: 4,
          picture: chorao,

          nome_comum: "Chorao"
        },
        {
          id: 5,
          picture: curicaUrubu,

          nome_comum: "Curica-Urubu"
        },
        {
          id: 7,
          picture: maritacaDeCabecaAzul,

          nome_comum: "Maritaca-de-Cabeça-Azul"
        },
        {
          id: 8,
          picture: garibaldi,

          nome_comum: "Garibaldi"
        },
        {
          id: 9,
          picture: sabiaPoca,

          nome_comum: "Sabiá-Poca"
        },
        {
          id: 10,
          picture: savacu,

          nome_comum: "Savacu"
        },
        {
          id: 11,
          picture: trincaFerro,

          nome_comum: "Trinca-Ferro"
        },
        {
          id: 12,
          picture: AnambéDeCoroa,

          nome_comum: "Anambé-de-Coroa"
        },
        {
          id: 13,
          picture: ArapaçuGalinha,

          nome_comum: "Arapaçu-Galinha"
        },
        {
          id: 14,
          picture: CantadorEstriado,

          nome_comum: "Cantador-Estriado"
        },
        {
          id: 15,
          picture: cambacica,

          nome_comum: "Cambacica"
        },
        {
          id: 20,
          picture: SurucuáPequeno,

          nome_comum: "Surucuá-Pequeno"
        },
        {
          id: 22,
          picture: TucanoDePapoBranco,

          nome_comum: "Tucano-de-Papo-Branco"
        },
        {
          id: 25,
          picture: PicaPauVerdeBarrado,

          nome_comum: "Pica-pau-Verde-Barrado"
        },
        {
          id: 23,
          picture: mariquita,

          nome_comum: "Mariquita"
        },
        {
          id: 21,
          picture: TucanoDeBicoPreto,

          nome_comum: "Tucano-de-Bico-Preto"
        },
        {
          id: 17,
          picture: Jacamaraçu,

          nome_comum: "Jacamaraçu"
        },
        {
          id: 18,
          picture: IratauáGrande,

          nome_comum: "Iratauá-Grande"
        },
        {
          id: 19,
          picture: PicaPauDeColeira,

          nome_comum: "Pica-pau-de-Coleira"
        },
        {
          id: 24,
          picture: Tucanaçu,

          nome_comum: "Tucanaçu"
        },
        {
          id: 16,
          picture: GaviãoDeCaudaCurta,

          nome_comum: "Gavião-de-Cauda-Curta"
        },
        {
          id: 6,
          picture: maritacaDeCabecaAzul,

          nome_comum: "Maritaca-de-Cabeca-Azul"
        }
      ],
      random: 0
    };
  }
  onChange = e => {
    this.setState({
      especie: e.target.value
    });
  };
  onSubmit = e => {
    this.setState({
      showEspecie: true
    });
  };
  reiniciarJogo = e => {
    this.setState({
      currentIndex: 0,
      alerta: false,
      certo: 0,
      errado: 0,
      showEspecie: false,
      valendoJogo: false
    });
  };
  startGame = e => {
    const min = 0;
    const max = 25;
    const rand = Math.floor(Math.random() * max + min);
    this.setState({
      random: rand,
      certo: 0,
      errado: 0,
      currentIndex: 0,
      alerta: false,
      valendoJogo: true,
      showEspecie: false,
      currentBird: this.state.birds[rand]
    });
  };
  adivinharResposta = e => {
    let answer = e.target.textContent;

    let correctAnswer = this.state.currentBird.nome_comum;
    if (answer === correctAnswer) {
      this.setState({ certo: this.state.certo + 1 });
    } else {
      this.setState({ errado: this.state.errado + 1 });
    }

    this.setState({ currentIndex: this.state.currentIndex + 1 });
    const rand = Math.floor(Math.random() * 25 + 0);
    this.setState({ currentBird: this.state.birds[rand], random: rand });
    if (this.state.currentIndex + 1 === 10) {
      this.setState({
        alerta: true,
        valendoJogo: false
      });

      return;
    }
    // For accomplishing a better readible equality-check.
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
            key={i}
            optionValue={this.state.birds[i].nome_comum}
            triggerProcess={this.adivinharResposta}
            activeGame={this.state.valendoJogo}
          />
        );
      }
      var value1 = Math.floor(Math.random() * (5 - 1));

      var opt1 = options[value1];

      options.pop(opt1);

      valendoConteudo = (
        <div>
          <div className="card ml-auto mr-auto" style={{ width: "90%" }}>
            <img
              src={this.state.currentBird.picture}
              style={{ height: "400px", maxWidth: "400px" }}
              alt=""
            />
            <div className="card-body">
              {opt1}
              {options}
            </div>
          </div>

          <div className="respostas" />
        </div>
      );
    }
    let showEsp;

    if (this.state.showEspecie) {
      showEsp = this.state.birds.map(bird => {
        if (
          bird.nome_comum
            .toLowerCase()
            .includes(this.state.especie.toLowerCase())
        ) {
          return (
            <div
              key={bird.id}
              className="card ml-auto mr-auto mt-2"
              style={{ width: "18rem" }}
            >
              <img
                src={bird.picture}
                className="card-img-top"
                alt="..."
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <p className="card-text">{bird.nome_comum}</p>
              </div>
            </div>
          );
        } else {
          return null;
        }
      });
    }

    return (
      <div className="vh-100">
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <a className="navbar-brand" href="#">
            GuessBird
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={this.startGame}>
                  Comecar jogo <span className="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#" onClick={this.startGame}>
                  Reset <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Voce acertou: {this.state.certo}
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
              <input
                className="form-control mr-sm-2"
                type="search"
                value={this.state.especie}
                placeholder="Procurar Especie"
                aria-label="Search"
                onChange={this.onChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 ml-auto mr-auto"
                type="submit"
              >
                Procurar Passaros
              </button>
            </form>
          </div>
        </nav>

        {this.state.alerta ? (
          <div className="alert alert-primary" role="alert">
            voce acertou: {this.state.certo}
          </div>
        ) : null}
        <h3 className="text-center mt-3 mb-3">Guess what Bird!</h3>
        {valendoConteudo}
        {showEsp}
        <div className="certo-errado d-flex justify-center mt-2">
          <button className="text-light btn-success w-50">
            Certo : {this.state.certo}
          </button>
          <button className="text-light btn-danger w-50">
            Errado : {this.state.errado}
          </button>
        </div>
      </div>
    );
  }
}
