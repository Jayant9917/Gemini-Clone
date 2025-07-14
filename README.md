# Gemini Clone

A React-based clone of Google Gemini, using the Gemini API for AI-powered chat.

## Features

- Chat interface with Gemini API
- Sidebar for navigation/history
- Streaming responses
- Modern UI

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up your Gemini API key:**
   - For practice, the API key is hardcoded in `src/config/gemini.js`.
   - For production, use environment variables and do not expose your key in frontend code.

3. **Run the app:**
   ```bash
   npm run dev
   ```

## Project Structure

- `src/components/` — React components (Main, Sidebar, etc.)
- `src/config/gemini.js` — Gemini API integration (streaming, prompt handling)
- `src/context/Context.jsx` — React context for state management
- `src/assets/` — Icons and images
- `public/` — Static assets

## How the Gemini API Integration Works

- The API key is currently hardcoded for practice in `src/config/gemini.js`.
- The `main(prompt)` function in `gemini.js`:
  - Sends the user prompt to the Gemini API using `generateContentStream`.
  - Collects the streaming response chunks and combines them into a single string.
  - Returns the full response text for rendering in the UI.
- In production, always use environment variables for API keys.

## Customization

- Update the UI in `src/components/` as needed.
- Change the model or API logic in `src/config/gemini.js`.
- Add more features (history, settings, etc.) as desired.

## Error Handling

- The app handles streaming and displays the Gemini response in the UI.
- Some non-breaking errors from the Gemini SDK (like `Incomplete JSON segment at the end`) may appear in the console; these can usually be ignored during development.


