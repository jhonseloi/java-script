import app from './app'

const port = process.env.APP_URL
app.listen(port, () => {
    console.log()
    console.log(`CTRL + clique em ${port}.`)
})
