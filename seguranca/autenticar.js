//tres parametros
//requisicao, resposta, next(prosseguir)
//os parametros sao fornecidos automaticamente pelo express

//se estiver autenticado, continua. se nao estiver, volta pro login
export default function autenticar(requisicao,resposta,next){
    if(requisicao.session.autenticado === true){
        next();
    }else{
        resposta.redirect('/login');
    }

}