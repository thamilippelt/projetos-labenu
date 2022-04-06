import React, { useReducer } from "react";
import axios from "axios";
import styled from "styled-components";
import AddMusicas from "./AdicionarMusicas";

const CardPlaylist = styled.div`
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    border: solid white 2px;
`

const DivPlaylist = styled.div`
    padding: 10px;
    margin: 10px;
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

export default class Playlist extends React.Component {

    state = {
        playlists: [],
        detalhesPlaylist: [],
        titulo: "Suas Playlists:",
        paginaAtual: "playlist",
        id: "",
        name: ""
    };

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {
                headers: {
                    Authorization: "thamires-lippelt-carver"
                }
            }
        ).then((res) => {
            console.log(res.data)
            this.setState({ playlists: res.data.result.list })
        }).catch((err) => {
            console.log(err.reponse.data)
            alert("Falha ao encontrar a Playlist")
        })
    }

    
    getPlaylists = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                {
                    headers: {
                        Authorization: "thamires-lippelt-carver"
                    }
                })
            .then((response) => {
                this.setState({ playlists: response.data.result.list });
                // console.log(response);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    deletarPlaylist = (listId) => {
        if (window.confirm("Você tem certeza que deseja deletar esta Playlist?")) {
            axios
                .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${listId}`,
                    {
                        headers: {
                            Authorization: "thamires-lippelt-carver"
                        }
                    })
                .then(() => {
                    alert("Playlist deletada!");
                    this.getPlaylists();
                })
                .catch((erro) => {
                    alert("Erro ao deletar Playlist");
                    console.log(erro.message);
                });
        }
    }

    pegarDetalhesPlaylist = (listId) => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${listId}/tracks`, {
                headers: {
                    Authorization: "thamires-lippelt-carver"
                }
            })
            .then((response) => {
                this.setState({ detalhesPlaylist: response.data.result.tracks });
            })
            .catch((error) => {
                console.log(error);
            });
    };


    render() {
        console.log(this.state.playlists)
        const listaDePlaylist = this.state.playlists.map((list) => {
            return (
                <CardPlaylist key={list.id}>
                    {list.name}
                    <Botao onClick={() => this.deletarPlaylist(list.id)}>Deletar</Botao>
                </CardPlaylist>
            )
        })
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
            <DivPlaylist>
                <Botao onClick={this.props.irParaCriar}>Voltar</Botao>
                <h2>{this.state.titulo}</h2>
                <h4>{listaDePlaylist}</h4>
                <p>{detalhes}</p>
                <AddMusicas></AddMusicas>
            </DivPlaylist>
        )
    }
}