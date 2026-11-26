
const fs = require("fs").promises

const arquivo = process.env.ARQUIVO_PEDIDOS || "pedidos.json"

// LISTAR PEDIDOS
async function listar() {
  try {
    const dados = await fs.readFile(arquivo, "utf-8")
    return JSON.parse(dados)
  } catch (erro) {
    if (erro.code === "ENOENT") {
      return []
    }
    throw erro
  }
}

// SALVAR PEDIDO
async function salvar(pedido) {
  const lista = await listar()

  lista.push(pedido)

  await fs.writeFile(
    arquivo,
    JSON.stringify(lista, null, 2)
  )

  return pedido
}

// ATUALIZAR PEDIDO
async function atualizar(id, dados) {
  const lista = await listar()

  const indice = lista.findIndex(pedido => pedido.id === id)

  if (indice === -1) {
    return null
  }

  lista[indice] = {
    ...lista[indice],
    ...dados
  }

  await fs.writeFile(
    arquivo,
    JSON.stringify(lista, null, 2)
  )

  return lista[indice]
}

// REMOVER PEDIDO
async function remover(id) {
  const lista = await listar()

  const novaLista = lista.filter(pedido => pedido.id !== id)

  if (novaLista.length === lista.length) {
    return false
  }

  await fs.writeFile(
    arquivo,
    JSON.stringify(novaLista, null, 2)
  )

  return true
}

// EXPORTAR FUNÇÕES
module.exports = {
  listar,
  salvar,
  atualizar,
  remover
}
