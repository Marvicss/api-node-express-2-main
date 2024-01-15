import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manupuladorDeErros(erro, req, res, next){
  if(erro instanceof mongoose.Error.CastError){
    res.status(500).send("erro interno do servidor");
  }else { 
    res.status(500).send({message: "Erro interno de servidor."});
  }
}

export default manupuladorDeErros;