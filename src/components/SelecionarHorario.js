import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import HorarioFilmes from "./HorarioFilme";

export default function SelecionarHorario() {
  const { filmId } = useParams();
  const [filmes, setFilmes] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmId}/showtimes`
    );

    promise.then((resposta) => {
      setFilmes(resposta.data.days);
      setBanner(resposta.data);
    });
    promise.catch(() => console.log("error"));
  }, []);

  return (
    <>
      <Topo>
        <h2>Selecione o Horário </h2>
      </Topo>
      {filmes.map((i) => (
        <HorarioFilmes
          weekday={i.weekday}
          date={i.date}
          showtimes={i.showtimes}
        />
      ))}
      <InfoFilme>
        <ImagemFilme>
          <img src={banner.posterURL} alt="" />
        </ImagemFilme>
        <TituloAndInfo>{banner.title}</TituloAndInfo>
      </InfoFilme>
    </>
  );
}
const InfoFilme = styled.div`
  width: 375px;
  height: 117px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-left: 23px;
  margin-top: 15px;
  background: #dfe6ed;

  img {
    width: 48px;
    height: 72px;
    border-radius: 5px;
  }
`;
const ImagemFilme = styled.div``;
const TituloAndInfo = styled.div`
  font-size: 26px;
  margin-left: 22px;
  font-weight: 400;
`;
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
