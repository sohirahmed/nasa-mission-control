const express = require("express");
const {
    httpAbortLaunch,
    httpAddNewLaunches,
    httpGetAllLaunches
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunches);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;






