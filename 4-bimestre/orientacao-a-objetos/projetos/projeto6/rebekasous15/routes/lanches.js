const express = require("express")
const router = express.Router() 

const lanches = [
    { id: 1, nome: "X-Burguer", categoria: "tradicional", preco: 25, ativo: true },
    { id: 2, nome: "X-Salada", categoria: "tradicional", preco: 28, ativo: true },
    { id: 3, nome: "X-Tudo", categoria: "especial", preco: 35, ativo: false }
]

router.get("/", (req, res) => {
    res.json(lanches)
})

router.get("/ativos", (req, res) => {
    res.json(lanches.filter(lanches => lanches.ativo))
})

router.get("/total", (req, res) => {
    res.json({total: lanches.length})
})

router.post("/", (req, res) => {
    res.status(201).json({mensagem: "Cadastro de lanche realizado"})
})

module.exports = router