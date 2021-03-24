import express from 'express'
import sequelize from './postgresConnector'
import character from './object/character'

const app = express()

// TODO : create in db a perso with info 
app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await character.sync({ force: true });
    console.log()
  } catch (error) {
    console.error('Unable to connect to the database:', error); 
  }
  res.send("Hello Louise, you are amazing !!!")
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})


// CREER EN DB
// const character = {
//   name: "Louise",
//   attack: 4,
//   defense: 3,
//   magik: 5,
//   health: 11,
//   skill_remaining: 0,
// }

// Route get "/character" qui récupère tous les personngaes

// Route post /character avec body qui créer un personnage (post avec postman)