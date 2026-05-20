// //http + express
const http = require("http");

require('dotenv').config()

const app = require('./app');
const {mongoConnect} = require('./services/mongo.js');
const { loadPlanetsData } = require("./models/planets.model");
const { loadLaunchesData } = require("./models/launches.model.js");

const PORT = process.env.PORT;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect()
    await loadPlanetsData();
    await loadLaunchesData()
    server.listen(PORT, () => {
        console.log(`LISTENING ON PORT ${PORT}...`);
    });
}
if (process.env.NODE_ENV !== 'test') {
    startServer();
}