const express = require("express")
const clientesRouter = require("./clientes")
const lanchesRouter = require("./lanches")
const router = express.Router() 

router.get("/", (req, res) => {
    res.json({mensagem:"API de Hamburgueria"})
})

router.use("/lanches", lanchesRouter)
router.use("/clientes", clientesRouter)

module.exports = router 