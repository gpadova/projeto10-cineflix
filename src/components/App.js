import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import TelaInicial from "./TelaInicial";
import SelecionarHorario from "./SelecionarHorario";
import SelecionaAssentos from "./SelecionaAssentos";
import Sucesso from "./Sucesso";
import Cabecalho from "./Cabecalho";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Cabecalho />
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/filme/:filmId" element={<SelecionarHorario />} />
          <Route path="/sessao/:sessionId" element={<SelecionaAssentos />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
