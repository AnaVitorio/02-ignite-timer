import { Outlet } from "react-router-dom";
import { Header } from "../componentes/Header";

export function DefaultLayout(){
    return(
        <div>
            <Header/>
            {/* Outlet é o espaço reservado para o proximo conteúdo */}
            <Outlet/> 
        </div>
    )
}