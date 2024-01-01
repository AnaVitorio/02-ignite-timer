import { Outlet } from "react-router-dom";
import { Header } from "../../componentes/Header";
import { LayoutContainer } from "./styles";

export function DefaultLayout(){
    return(
        <LayoutContainer>
            <Header/>
            {/* Outlet é o espaço reservado para o proximo conteúdo */}
            <Outlet/> 
        </LayoutContainer>
    )
}