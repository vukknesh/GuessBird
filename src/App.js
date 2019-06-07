import React, { Component } from "react";
import "./App.css";
//auto sugest

// Fotos
import anaca from "./pics/anaca.jpg";
import anuBranco from "./pics/anu-branco.jpg";
import cardealDaAmazonia from "./pics/cardeal-da-amazonia.jpg";
import chorao from "./pics/chorao.jpeg";
import curicaUrubu from "./pics/curica-urubu.jpg";
import garibaldi from "./pics/garibaldi.jpg";
import bemTeVi from "./pics/bem-te-vi.jpg";
import guaracavaDeTopeteUniforme from "./pics/guaracava-de-topete-uniforme.jpg";
import macaricoDePernaAmarela from "./pics/macarico-de-perna-amarela.jpg";
import sairaAmarela from "./pics/saira-amarela.jpg";
import uirapuruLaranja from "./pics/uirapuru-laranja.jpg";
import viuvinhaDeOculos from "./pics/viuvinha-de-oculos.jpg";
import gaviaoBelo from "./pics/gaviao-belo.jpg";
import cabecaDeOuro from "./pics/cabeca-de-ouro.jpg";
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

// Componentes
import Landing from "./components/Landing";
import Especies from "./components/Especies";

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
class RespostaErrada extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          zIndex: 5,
          width: "100%",
          top: "-20px",
          left: 0
        }}
        className="alert alert-danger d-flex"
        role="alert"
      >
        {this.props.resErr}
        <button onClick={this.props.closeError} className="text-red ml-auto">
          X
        </button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEspecie: false,
      suggestions: [],
      especie: "",
      currentIndex: 0,
      alerta: false,
      respErrado: false,
      respostaEscritaErrada: "",
      currentBird: {},
      certo: 0,
      errado: 0,
      active: false,
      regras: false,

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
        },
        {
          id: 26,
          picture: cabecaDeOuro,

          nome_comum: "Cabeça-de-ouro"
        },
        {
          id: 27,
          picture: gaviaoBelo,

          nome_comum: "Gavião-belo"
        },
        {
          id: 28,
          picture: viuvinhaDeOculos,

          nome_comum: "Viuvinha-de-oculos"
        },
        {
          id: 29,
          picture: uirapuruLaranja,

          nome_comum: "Uirapuru-laranja"
        },
        {
          id: 30,
          picture: sairaAmarela,

          nome_comum: "Saira-amarela"
        },
        {
          id: 31,
          picture: macaricoDePernaAmarela,

          nome_comum: "Macarico-de-perna-amarela"
        },
        {
          id: 32,
          picture: guaracavaDeTopeteUniforme,

          nome_comum: "Guaracava-de-topete-uniforme"
        },
        {
          id: 33,
          picture: bemTeVi,

          nome_comum: "Bem-te-vi"
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
      regras: false,
      respErrado: false,
      showEspecie: false,
      valendoJogo: false
    });
  };
  startGame = e => {
    const min = 0;
    const max = 33;
    const rand = Math.floor(Math.random() * max + min);

    this.setState({
      random: rand,
      certo: 0,
      errado: 0,
      currentIndex: 0,
      alerta: false,
      valendoJogo: true,
      showEspecie: false,
      regras: false,
      respErrado: false,
      currentBird: this.state.birds[rand]
    });
  };
  closeError = e => {
    this.setState({ respErrado: false, active: false });
  };
  mostrarRegras = e => {
    this.setState({ regras: true });
  };

  adivinharResposta = e => {
    let answer = e.target.textContent;

    let correctAnswer = this.state.currentBird.nome_comum;
    if (answer === correctAnswer) {
      this.setState({
        certo: this.state.certo + 1,
        respErrado: false,
        active: false
      });
    } else {
      this.setState({
        errado: this.state.errado + 1,
        respErrado: true,
        active: true,

        respostaEscritaErrada: `A especie certa era: ${correctAnswer}`
      });
    }

    this.setState({ currentIndex: this.state.currentIndex + 1 });
    const rand = Math.floor(Math.random() * 33 + 0);

    this.setState({ currentBird: this.state.birds[rand], random: rand });
    if (this.state.currentIndex + 1 === 10) {
      this.setState({
        alerta: true,
        valendoJogo: false
      });

      return;
    }
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
        if (i > 32) {
          options.push(
            <Option
              optionValue={this.state.birds[i - 7].nome_comum}
              triggerProcess={this.adivinharResposta}
              activeGame={this.state.valendoJogo}
            />
          );
        } else {
          options.push(
            <Option
              optionValue={this.state.birds[i].nome_comum}
              triggerProcess={this.adivinharResposta}
              activeGame={this.state.valendoJogo}
            />
          );
        }
      }
      let randOpt1 = Math.floor(Math.random() * 4 + 0);

      let finalOptions = [];

      switch (randOpt1) {
        case 0: //4
          finalOptions.push(options[3]);
          finalOptions.push(options[2]);
          finalOptions.push(options[1]);
          finalOptions.push(options[0]);
          break;
        case 1: //3
          finalOptions.push(options[2]);
          finalOptions.push(options[3]);
          finalOptions.push(options[0]);
          finalOptions.push(options[1]);
          break;
        case 2: //3
          finalOptions.push(options[1]);
          finalOptions.push(options[0]);
          finalOptions.push(options[2]);
          finalOptions.push(options[3]);
          break;
        case 3: //1
          finalOptions.push(options[0]);
          finalOptions.push(options[1]);
          finalOptions.push(options[2]);
          finalOptions.push(options[3]);
          break;
      }

      valendoConteudo = (
        <div>
          <div
            className="card ml-auto mr-auto"
            style={{ width: "90%", maxWidth: "400px" }}
          >
            <img
              src={this.state.currentBird.picture}
              style={{ maxHeight: "330px", maxWidth: "400px" }}
              alt=""
            />
            <div className="card-body">
              {/* {op2}
              {op1}
              {op4}
              {op3} */}
              {finalOptions}
              {/* {options} */}
            </div>
          </div>

          <div className="respostas" />
        </div>
      );
    }
    let errados = [];

    if (this.state.respErrado) {
      errados.push(
        <RespostaErrada
          closeError={this.closeError}
          resErr={this.state.respostaEscritaErrada}
        />
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
      <div
        style={{
          backgroundColor: "rgba(127, 105, 94, 0.85)",
          overflowY: "hidden"
        }}
      >
        <nav
          className="navbar navbar-light text-white"
          style={{ backgroundColor: "rgba(249, 201, 144, 0.7)" }}
        >
          <a
            href="https://www.murukututu.com"
            target="_blank"
            className="navbar-brand"
          >
            Murukututu
            <span style={{ color: "rgb(249, 251, 144)" }}>.com</span>
          </a>

          <ul className="nav ml-auto d-flex">
            <li className="nav-item ">
              <a
                style={{ fontSize: "12px", marginRight: "-15px" }}
                className="nav-link"
                onClick={this.startGame}
              >
                Comecar jogo <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "12px", marginRight: "-15px" }}
                className="nav-link"
                onClick={this.reiniciarJogo}
              >
                Reiniciar <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className={this.state.active ? "owl password" : "owl"}>
          <div className={this.state.active ? "hand password" : "hand"} />
          <div
            className={
              this.state.active ? "hand hand-r password" : "hand hand-r"
            }
          />
          <div className={this.state.active ? "arms password" : "arms"}>
            <div className={this.state.active ? "arm password" : "arm"} />
            <div
              className={this.state.active ? "arm arm-r password" : "arm arm-r"}
            />
          </div>
        </div>
        <div className={this.state.active ? "form password" : "form"}>
          {/* <p>Email</p> */}
          <div className={this.state.active ? "control password" : "control"}>
            <label
              htmlFor="email"
              className={
                this.state.active ? "fa fa-envelope password" : "fa fa-envelope"
              }
            />
          </div>

          <div className={this.state.active ? "control password" : "control"}>
            <label
              htmlFor="password"
              className={
                this.state.active ? "fa fa-asterisk password" : "fa fa-asterisk"
              }
            />

            <div
              style={{ maxWidth: "450px", minHeight: "80vh" }}
              className="mr-auto ml-auto  "
            >
              {this.state.alerta ? (
                <div className="alert alert-primary" role="alert">
                  voce acertou: {this.state.certo}
                </div>
              ) : null}
              {this.state.valendoJogo ? null : (
                <h3 className="text-center text-white mt-3 mb-3">
                  Guess what Bird!
                </h3>
              )}
              {this.state.respErrado ? errados : null}

              {this.state.valendoJogo ? null : (
                <Landing
                  valendo={this.startGame}
                  procurar={this.onSubmit}
                  showEspecie={this.state.showEspecie}
                  especie={this.state.especie}
                  onChangeEsp={this.onChange}
                  regras={this.mostrarRegras}
                  birds={this.state.birds}
                />
              )}

              {valendoConteudo}
              {showEsp}
              {this.state.valendoJogo ? (
                <div className="certo-errado d-flex justify-center mt-2">
                  <button className="text-light btn-success w-50">
                    Certo : {this.state.certo}
                  </button>
                  <button className="text-light btn-danger w-50">
                    Errado : {this.state.errado}
                  </button>
                </div>
              ) : null}
              <Especies />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
