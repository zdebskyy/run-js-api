const path = require("path");
const { promises: fs } = require("fs");

class runController {
  async writeScript(req, res) {
    const { script } = req.body;
    const runFilePath = path.join(__dirname, "..", "run.js");
    await fs.writeFile(runFilePath, script);
    res.status(200).json("OK");
  }
  async readScript(req, res) {
    const runFilePath = path.join(__dirname, "..", "run.js");
    const scriptContent = await fs.readFile(runFilePath, "utf8");
    res.status(200).send(scriptContent);
  }
  async writeLog(req, res) {
    const { log } = req.body;
    const logFilePath = path.join(__dirname, "..", "log.js");
    await fs.appendFile(logFilePath, log + "\r\n", "UTF-8", { flags: "a+" });
    res.status(200).json("OK");
  }
  async readLog(req, res) {
    const logFilePath = path.join(__dirname, "..", "log.js");
    const logFileContent = await fs.readFile(logFilePath, "utf8");
    res.status(200).send(logFileContent);
  }
}

module.exports = new runController();
