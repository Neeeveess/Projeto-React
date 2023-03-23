import React from "react";
import If, {Else} from "./If";

export default props =>{
    const usuario = props.usuario || {}
    return(
        <div>
            {/* <If test={usuario && usuario.nome}>
                Seja bem Vindo <strong>{usuario.nome}</strong>
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem Vindo <strong>Amigao</strong>
            </If> */}

            <If test={usuario && usuario.nome}>
                Seja bem Vindo <strong>{usuario.nome}</strong>
                <Else test={!usuario || !usuario.nome}>
                    Seja bem Vindo <strong>Amigao</strong>
                </Else>   
            </If>
            
        </div>
    )
}