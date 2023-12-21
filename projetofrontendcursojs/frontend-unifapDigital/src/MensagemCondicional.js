    import React from "react";

    const MensagemCondicional = () => {
        const deveExibirMensagem = true;

        return (
            <>
            <div>
                {
                    deveExibirMensagem ? ( <p>Mensagem Exibida</p>) : (<p>Rala mlk</p>)
                }
            </div>
            </>
        )
    }

    export default MensagemCondicional;