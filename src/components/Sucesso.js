import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Sucesso() {
  const location = useLocation();
  
  console.log(location);
  return (
    <>
      <Topo>
        <h2>Pedido Feito com sucesso!</h2>
      </Topo>
      <Dados>
        <div className="info-filme">
          <h2>Filme e sessão</h2>
          <p>{location.state.titulo}</p>
          <p>{location.state.data} - {location.state.horario}</p>
        </div>
        <div className="ingressos">
          <h2>Ingresos</h2>
          {location.state.assentos.map(i => <p>Assento {i}</p>)}
        </div>
        <div className="comprador">
          <h2>Comprador</h2>
          <p>Nome: {location.state.nome}</p>
          <p>CPF: {location.state.cpf}</p>
        </div>
      </Dados>
      <BotaoHome>
        <Link to="/">
          <button>
            <p>Voltar para home</p>
          </button>
        </Link>
      </BotaoHome>
    </>
  );
}

const Topo = styled.div`
  width: 100%;
  height: 110px;
  color: #247a6b;

  font-family: "Roboto";
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.04em;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 29px;
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 10px;
    color: #293845;
  }
  p {
    font-size: 22px;
    color: #293845;
  }
`;
const BotaoHome = styled.div`
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
