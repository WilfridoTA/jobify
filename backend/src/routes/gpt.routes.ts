import express from "express";
import { spawn } from "child_process";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Replace with your actual OpenAI API key
    const apiKey = process.env.OPENAI_API_KEY;

    // The input from the client, which you want to send to ChatGPT
    const userInput = req.body.userInput;

    // Make a request to the ChatGPT API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", // or the model you want to use
        messages: [
          {
            role: "system",
            content:
              "You are ChatGPT, a large language model trained by OpenAI.",
          },
          { role: "user", content: userInput },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {}

  res.status(500).json({ error: "error" });
});

export default router;
