import React from "react";
import styled from "styled-components"
import CriarPlaylist from "./components/CriarPlaylist"
import Playlist from "./components/Playlist"
import Logo from "./components/img/logocolorido.png"
import AddMusicas from "./components/AdicionarMusicas";

const AppConteiner = styled.div`
  background-color: gray;
  color: white;
  margin: 0;
`;

const Header = styled.header`
  background-color: white;
  text-align: center;
  color: black;
  font-family: inherit;
  font-size: 40px;
  padding-left: 5%;
`

const Footers = styled.footer`
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 99%;
  height: 20%;
  padding-bottom: 0;
  margin: 0;
`;

const ImagemLateral = styled.img`
  width: 5%;
  margin-top: 5px;
`

// const urlGetAll = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
// const urlPostCrate = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
// const urlDel = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId"

class App extends React.Component {
  state = {
    telaAtual: "criar"
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "criar":
        return <CriarPlaylist irParaLista={this.irParaLista} />
      case "lista":
        return <Playlist irParaCriar={this.irParaCriar} />
      case "musicas":
        return <AddMusicas irParaMusicas={this.irParaMusicas} />
      default:
        return <div>ERROR 404! Not Found!</div>

    }
  }

  irParaCriar = () => {
    this.setState({ telaAtual: "criar" })

  }

  irParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }

  irParaMusicas = () => {
    this.setState({ telaAtual: "musicas" })
  }
  
  

  render() {

    return (
      <AppConteiner>
        <Header>
          <ImagemLateral src={Logo} alt="logo" />
          <strog>Labefy</strog>
        </Header>
        <hr />
        {this.escolheTela()}

        <Footers>Labefy - Todos os direitos reservados</Footers>
      </AppConteiner>
    )
  }
}

export default App;
