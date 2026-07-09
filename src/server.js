import APP from './app.js'

const PORT = process.env.PORT || 3000

APP.listen(PORT, () => {
    console.log(`O servidor está rodando no endereço http://localhost:${PORT}`)
})