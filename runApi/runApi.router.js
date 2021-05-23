const { Router } = require("express");
const {
  writeScript,
  readScript,
  writeLog,
  readLog,
} = require("./runApi.controller");
const runApiRouter = Router();

runApiRouter.post("/run-post", writeScript);
runApiRouter.get("/run-get", readScript);

runApiRouter.post("/log-post", writeLog);
runApiRouter.get("/log-get", readLog);

module.exports = runApiRouter;
