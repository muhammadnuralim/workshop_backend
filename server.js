const express = require('express'); 
const cors = require('cors')
const port = 3000
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://127.0.0.1:5500"
}))


const db = require('./app/models/index')
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./app/routes/task.routes")(app);


app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
})