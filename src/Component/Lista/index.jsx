export const Lista= ({nome, usuario, descricao, data_inclusao, palavras_chave})=> {
    return(
        <div>
            <div className="">
                <div><h1>{nome}</h1></div>
                <div><p>{data_inclusao}</p>
                <p>Feito por: {usuario}</p></div>
                <p>{descricao}</p>
                <p>palavras-chaves: {palavras_chave}</p>
                </div>
        </div>
    )
}