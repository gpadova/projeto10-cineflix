import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect, useNavigate } from "react";
import AssentoIndividual from "./AssentoIndividual";
import { Link } from "react-router-dom";

export default function SelecionarAssentos() {
  const [filme, setFilme] = useState([]);
  const [banner, setBanner] = useState([]);
  const [time, setTime] = useState([]);
  const [dia, setDia] = useState([]);
  const [seatId, setSeatId] = useState([]);

  const [ids, setIds] = useState([]);

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const { sessionId } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`
    );
    promise.then((resposta) => {
      setFilme(resposta.data.seats);
      setBanner(resposta.data.movie);
      setTime(resposta.data);
      setDia(resposta.data.day);
    });
    promise.catch(() => console.log("error"));
  }, []);

  const body = {
    ids: seatId,
    name: name,
    cpf: cpf,
  };

  const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

  function enviarRequisicao(event) {
    event.preventDefault();
    const promise = axios.post(URL, body);

    promise.then(() => alert("deu tudo certo!"));
    promise.catch(() => alert("algo deu errado!"));
  }

  return (
    <>
      <Topo>
        <h2>Selecionar o(s) Assento(s)</h2>
      </Topo>
      <MapaDosAssentos>
        {filme.map((i, index) => (
          <AssentoIndividual
            ids={ids}
            setIds={setIds}
            name={i.name}
            isAvailable={i.isAvailable}
            index={index + 1}
            idReal = {i.id}
            seatId={seatId}
            setSeatId={setSeatId}
          />
        ))}
      </MapaDosAssentos>
      <Legenda>
        <div className="legend">
          <button className="verde"></button>
          <p>Selecionado</p>
        </div>
        <div className="legend">
          <button className="cinza"></button>
          <p>Disponível</p>
        </div>
        <div className="legend">
          <button className="amarelo"></button>
          <p>Indisponível</p>
        </div>
      </Legenda>
      <form onSubmit={enviarRequisicao}>
        <FormularioComprador>
          <label htmlFor="nome">Nome do Comprador</label>
          <input
            id="nome"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="cpf">CPF do comprador</label>
          <input
            type="number"
            id="cpf"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            required
          />
        </FormularioComprador>
        <BotaoConfirmar>
          {name !== "" && cpf !== "" ? (
            <Link
              to="/sucesso"
              state={{
                titulo: banner.title,
                horario: time.name,
                data: dia.date,
                nome: name,
                cpf: cpf,
                assentos: ids,
              }}
            >
              <button type="submit">
                <p>Reservar Assento(s)</p>
              </button>
            </Link>
          ) : (
            <button type="submit">
              <p>Reservar Assento(s)</p>
            </button>
          )}
        </BotaoConfirmar>
      </form>
      <InfoFilme>
        <ImagemFilme>
          <img src={banner.posterURL} alt="" />
        </ImagemFilme>
        <TituloAndInfo>
          <h2>{banner.title}</h2>
          <p>
            {dia.weekday} - {time.name}
          </p>
        </TituloAndInfo>
      </InfoFilme>
    </>
  );
}

const BotaoConfirmar = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 57px;
  margin-bottom: 25px;

  p {
    color: white;
    font-size: 18px;
  }
  button {
    width: 225px;
    height: 42px;
    background-color: #e8833a;
    border-radius: 5px;
  }
`;
const FormularioComprador = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  width: 313px;
  input {
    width: 327px;
    height: 51px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    margin-top: 20px;
  }
  label {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const Legenda = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .legend {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .legend p {
    font-size: 12px;
  }
  .legend button {
    color: #1aae9e;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .verde {
    background-color: #1aae9e;
  }
  .cinza {
    background-color: #c3cfd9;
  }
  .amarelo {
    background-color: #f7c52b;
  }
`;

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

const MapaDosAssentos = styled.div`
  width: 350px;
  height: 234px;

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
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
