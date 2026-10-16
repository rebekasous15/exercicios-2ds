function carregarConfig() {
    return {
        servico: process.env.SERVICO,
        porta: process.env.PORT,
        ambiente: process.env.AMBIENTE, 
        
    }
}