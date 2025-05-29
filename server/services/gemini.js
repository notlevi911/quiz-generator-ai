import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDu6SutMtjIVe9lJEnMhOw26QCtTM87hzQ");

export const fetchGeminiResponse = async (systemInstruction, userInstruction, model = "models/gemini-1.5-pro-latest") => {
  try {
    const modelInstance = genAI.getGenerativeModel({ model });
    const prompt = `${systemInstruction}\n${userInstruction}`;
    const result = await modelInstance.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    console.log("Gemini raw response:", text); // Debug log
    // Remove Markdown code block if present
    text = text.trim();
    if (text.startsWith('```json')) {
      text = text.replace(/^```json\s*/, '').replace(/```\s*$/, '');
    } else if (text.startsWith('```')) {
      text = text.replace(/^```\s*/, '').replace(/```\s*$/, '');
    }
    // Try to parse JSON, but always return the raw text for debugging
    try {
      return JSON.parse(text);
    } catch (e) {
      return { text, error: "Gemini did not return valid JSON." };
    }
  } catch (error) {
    console.error("Error generating Gemini response:", error);
    return { error: `Error generating Gemini response: ${error}` };
  }
};
