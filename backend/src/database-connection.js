const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE

let connectionString = process.env.MONGODB_CONNECTION_STRING
console.log(connectionString)

if (!connectionString) {
  connectionString = `mongodb+srv://${username}:${password}@cluster0.hpptp.mongodb.net/${dbName}?retryWrites=true&w=majority`
}

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('database connection established'))
  .catch(console.log)