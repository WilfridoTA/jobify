import express from "express";
import { spawn } from "child_process";

const router = express.Router();

const executePython = async (script: string, args: string[]) => {
  const py = spawn("python3", [script, ...args]);

  const result = await new Promise((resolve, reject) => {
    let output: any;

    // Get output from python script
    py.stdout.on("data", (data) => {
      console.log(data);
      output = JSON.parse(`{  "data": ${data} }`);
    });

    // Handle erros
    py.stderr.on("data", (data) => {
      //console.error(`[python] Error occured: ${data}`);
      //reject(`Error occured in ${script}`);
    });

    py.on("exit", (code) => {
      //console.log(`Child process exited with code ${code}`);
      resolve(output);
    });
  });

  return result;
};

router.get("/runpy", async (req, res) => {
  try {
    const result = await executePython("python/scraper.py", ["8", "6"]);

    res.json({ result: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
