import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HorarioFilmes({weekday, date, showtimes}){
    return (
        
        <Dia>
        <p>{weekday} - {date}</p>
        <Horarios>
          {showtimes.map(i => <Link to={`/sessao/${i.id}`}><Horario>{i.name}</Horario></Link>)}
        </Horarios>
      </Dia>
    )
}

const Dia = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 23px;
  margin-top: 15px;
  p {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #293845;
  }
`; 
const Horario = styled.div`
  height: 43px;
  width: 83px;
  border-radius: 3px;
  background: #E8833A;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 22px;
  &:hover{
    border: 2px solid yellow;
  }
`;
const Horarios = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;