require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const runApiRouter = require("./runApi/runApi.router");

const port = process.env.PORT || 8080;

module.exports = class Server {
  constructor() {
    this.server = null;
  }

  async start() {
    // Input start middlwares here
    this.initPort();
    this.initServer();
    this.initMiddlwares();
    this.initRoutes();
    // this.errorHandling();
    this.startListening();
  }

  initServer() {
    this.server = express();
    console.log("server initialized");
  }

  initPort() {
    this.port = port;
    console.log("port initialized");
  }

  initMiddlwares() {
    this.server.use(express.json());
    this.server.use(morgan("dev"));
    this.server.use(cors());
    this.server.use(express.static("static"));
    console.log("middlewares initialized");
  }

  initRoutes() {
    // input routers here
    this.server.use("/api", runApiRouter);
    console.log("routes initialized");
  }

  startListening() {
    this.server.listen(this.port, () => {
      console.log("Server started at PORT:", this.port);
    });
  }
};
