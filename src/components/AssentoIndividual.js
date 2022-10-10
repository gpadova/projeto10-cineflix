import styled from "styled-components";
import { useState } from "react";

export default function AssentoIndividual({
  ids,
  setIds,
  index,
  name,
  isAvailable,
  seatId,
  setSeatId,
  idReal,
}) {
  const [assentoClicado, setAssentoClicado] = useState(false);

  function stringAssentos(clique) {
    if (ids.includes(clique)) {
      const indiceElemento = ids.indexOf(clique);
      if (indiceElemento > -1) {
        ids.splice(indiceElemento, 1);
      }
    } else {
      setIds([...ids, clique]);
    }
  }

  function adicionaIdParaPost(clique) {
    if (seatId.includes(clique)) {
      const indiceElemento = seatId.indexOf(clique);
      if (indiceElemento > -1) {
        seatId.splice(indiceElemento, 1);
      }
    } else {
      setSeatId([...seatId, clique]);
    }
  }
  function verificaCor(disponivel) {
    if (disponivel && assentoClicado) {
      return "verde";
    }
    if (disponivel) {
      return "cinza";
    } else {
      return "amarelo";
    }
  }

  function alertaCasoIndis(disponivel) {
    if (disponivel === false) {
      alert("Este assento não está disponível");
    }
  }

  return (
    <>
      <Assento>
        <button
          className={verificaCor(isAvailable)}
          onClick={() => {
            setAssentoClicado(!assentoClicado);
            stringAssentos(index);
            alertaCasoIndis(isAvailable);
            adicionaIdParaPost(idReal);
          }}
          index={index}
        >
          {name}
        </button>
      </Assento>
    </>
  );
}

const Assento = styled.div`
  margin-left: 7px;
  button {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover:enabled {
      cursor: pointer;
    }
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
