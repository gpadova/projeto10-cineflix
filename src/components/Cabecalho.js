import styled from "styled-components"

export default function Cabecalho() {
    return (
        <CabecalhoPag>
            <h1>CINEFLIX</h1>
        </CabecalhoPag>

    )
}


const CabecalhoPag = styled.div`
    width: 100%;
    height: 67px;
    margin: 0 auto;
    background: #C3CFD9;
    color: #E8833A;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ;
    font-size: 34px;
`