import React, { Component } from "react";
import axios from "axios";

class Especies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      especies: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/especies/?multi_name_fields=BR")
      .then(res => {
        this.setState({
          especies: res.data
        });
      });
  }
  render() {
    let especies;
    if (this.state.especies) {
      especies = this.state.especies.map(especie => (
        <div
          key={especie.id}
          style={{ background: "white", marginBottom: "4px", padding: "2px" }}
        >
          <p>
            {especie.nome_comum}/{especie.familia}
          </p>
        </div>
      ));
    }

    return <div>{especies}</div>;
  }
}
export default Especies;
