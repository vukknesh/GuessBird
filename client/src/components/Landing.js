import React, { Component } from "react";
import "../autosuggest.css";

class Landing extends Component {
  render() {
    return (
      <div
        style={
          this.props.showEspecie ? null : { marginTop: "200px", width: "100%" }
        }
        className="ml-auto mr-auto"
      >
        <button
          type="button"
          className="btn btn-success btn-block mb-2"
          data-toggle="modal"
          data-target="#ModalLongoExemplo"
        >
          Regras do Jogo
        </button>

        <div
          className="modal fade"
          id="ModalLongoExemplo"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="TituloModalLongoExemplo"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="TituloModalLongoExemplo">
                  Regras do Jogo
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Fechar"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                1- Dentre 33 pássaros, tentarás acertar 10. <br />
                <br />
                2- Dentre 4 possibilidades somente 1 espécie certa! <br />
                <br />
                3- Quem acertar mais, ganha!
                <br />
                <br />
                <div className="text-center">
                  <hr />
                  <p className="mb-5">All rights reserved by @Murukututu.com</p>
                  <small className="text-center">
                    Instagram:{"  "}
                    <a
                      target="_blank"
                      href="https://www.instagram.com/murukututu.com.br/"
                    >
                      @Murukututu.com.br
                    </a>
                  </small>
                  <br />
                  <br />
                  <small className="text-center">
                    Facebook:{"  "}
                    <a
                      target="_blank"
                      href="https://www.facebook.com/murukututu.com.br/"
                    >
                      Murukututu
                    </a>
                  </small>
                  <br />
                  <br />
                  <small className="text-center">
                    Por:{"  "}
                    <a
                      target="_blank"
                      href="https://vukknesh.github.io/portfolio/index.html"
                    >
                      Leonardo Neshich
                    </a>
                  </small>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={this.props.valendo}
          className="btn btn-block btn-warning"
        >
          Começar o Jogo
        </button>
        {this.props.showEspecie ? (
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={this.props.procurar}
          >
            <input
              style={{ width: "100%" }}
              className="form-control  mr-sm-2"
              type="search"
              value={this.props.especie}
              placeholder="Procurar Especie"
              aria-label="Search"
              onChange={this.props.onChangeEsp}
            />
          </form>
        ) : null}
        <button
          onClick={this.props.procurar}
          className="btn btn-block btn-danger"
        >
          Procurar Espécies
        </button>
      </div>
    );
  }
}

export default Landing;
