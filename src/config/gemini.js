// const ApiKey = 'AIzaSyBjZzy92FjHPeL6G0O5wU01UHzD5FGZciI'

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyBjZzy92FjHPeL6G0O5wU01UHzD5FGZciI",
  });
  const tools = [
    {
      googleSearch: {
      }
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullText = "";
  for await (const chunk of response) {
    const part = chunk?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (part) {
      fullText += part;
    }
  }
  return fullText;
}

export default main;
