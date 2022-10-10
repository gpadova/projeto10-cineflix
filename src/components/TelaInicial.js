import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function TelaInicial() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((response) => setFilmes(response.data));
  }, []);

  return (
    <>
      <Topo>
        <h2>Selecione o Filme</h2>
      </Topo>
      <Filmes>
        <Filme>
          {filmes.map((i) => (
            <Link to={`/filme/${i.id}`}>
              <img src={i.posterURL} alt="" />
            </Link>
          ))}
        </Filme>
      </Filmes>
    </>
  );
}

const Topo = styled.div`
  width: 100%;
  height: 110px;

  font-family: "Roboto";
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.04em;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Filmes = styled.div`
  width: 304px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Filme = styled.div`
  img {
    height: 193px;
    width: 129px;
    border-radius: 5px;
    margin-left: 20px;
    margin-top: 20px;
  }
  img:hover {
    border: 2px solid lightblue;
    cursor: pointer;
  }
`;
