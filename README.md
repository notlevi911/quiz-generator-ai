# Quiz Generator AI

A full-stack web application for generating quizzes using Google Gemini AI. Users can specify a topic, number of questions, and difficulty, and the app will generate a quiz with explanations for each answer.

## Features
- Generate quizzes on any topic using Gemini AI
- Choose number of questions and difficulty level
- Explanations for each answer
- Modern React frontend with Tailwind CSS
- Node.js/Express backend

## Tech Stack
- **Frontend:** React, Vite, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express
- **AI Service:** Google Gemini (Generative AI)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/quiz-generator-ai.git
   cd quiz-generator-ai
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following content:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   VITE_PORT=3000
   ```
   - Replace `your_gemini_api_key_here` with your Google Gemini API key.
   - `VITE_PORT` is optional (defaults to 3000).

4. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Access the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
quiz-generator-ai/
├── server/           # Express backend
│   ├── index.js
│   ├── routes/
│   └── services/
├── src/              # React frontend
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── data/             # Generated quizzes
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── ...
```

## Environment Variables
- `GEMINI_API_KEY` – Your Google Gemini API key (required)
- `VITE_PORT` – Port for the backend server (optional, default: 3000)


