import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardMusicas = styled.div`
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction:column;
    width: 300px;
`

const Botao = styled.button`
cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: white;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`

export default class AddMusicas extends React.Component {

    state = {
        detalhesPlaylist: [],
        name: "",
        artist: "",
        url: ""
    };

    addNome = (event) => {
        const nomeDaMusica = event.target.value;
        this.setState({ name: nomeDaMusica });
    };

    addArtista = (event) => {
        const nomeDoArtista = event.target.value;
        this.setState({ artist: nomeDoArtista });
    };

    urlDaMusica = (event) => {
        const novaUrl = event.target.value;
        this.setState({ url: novaUrl });
    };



    addMusicaNaPlaylist = (listId) => {
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.listId}/tracks`, body,
            {
                headers: {
                    Authorization: 'thamires-lippelt-carver'
                }
            })
            .then((res) => {
                this.setState({name: ""});
                this.setState({artist: ""});
                this.setState({url: ""});
                alert('Música adicionada!')
            })
            .catch((err) => {
                console.log(err.message);
                alert('Não foi possível adicionar a música, verifique as informações.')
            })
    }



    render() {
        const detalhes = this.state.detalhesPlaylist.map((playlist) => {
            return (
                <div key={playlist.id}
                    name={playlist.name}
                    artist={playlist.artist}
                    url={playlist.url}
                />

            )
        });
        return (
            <CardMusicas>
                <p>Adicione mais músicas a Playlist:</p>
                <label><b>Título</b></label>
                <input value={this.state.name} onChange={this.addNome}></input>
                <label><b>Artista</b></label>
                <input value={this.state.artist} onChange={this.addArtista}></input>
                <label><b>URL:</b></label>
                <input value={this.state.url} onChange={this.urlDaMusica}></input>
                <Botao onClick={this.addMusicaNaPlaylist}>Adicionar</Botao>
            </CardMusicas>)
    }
}


