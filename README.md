# Open AI + RAG Copilot

## Overview

This project is a Holiday Maker assistant that utilizes OpenAI's LLM model along with LangChain's RAG optimization to augment the chat completion offered by the base GPT-3.5 Turbo model. It provides users with personalized holiday recommendations based on their preferences and requirements.

## Objective

The objective of this project is to create a copilot that assists users in planning their next trip. Planning a holiday involves finding flights, hotels, activities, and local food options while also prioritizing the user's budget. The purpose of the copilot is to match an ideal holiday destination to the user's preferences in terms of the type of holiday they would like (e.g., beach vibes vs. relaxing getaways), their budget allocation, and activity requirements (surfing, sand dune riding, safari, etc.).

## Project Scope

The project is a submission to the Azure OpenAI hackathon. It utilizes the Azure OpenAI copilot stack.

#### Tech Stack

##### Backend:

The backend technology is built using Python and FastAPI's framework to create responsive RESTful API services to gather all related data for prices, availability, and database index searching. The RAG component is implemented using OpenAI's embedding model to create vector indexes for the Cosmos DB vCore database and retrieval of holiday destinations based on the user's text inputs.

###### Libraries:

- Azure OpenAI
- Langchain
- FastAPI
- PyMongo
- Pydantic
- Microsoft Cognitive Services (Bing Web Search API, Bing Image Search API, Bing Entity Search API)

##### Frontend:

The user interface is created using the React framework with Vite build tools. The user interface allows the user to input their preferences and requirements and receive data back regarding flight and hotel information.

###### Libraries:

- Vite
- React
- Chakra UI

##### Cloud Services:

The project is hosted using Azure's cloud services for both the backend API and frontend app, along with the MongoDB.

- Azure Open AI API
- Azure Cosmos DB for MongoDB
- Azure Web Services Plan
- Azure Web App

## System Design

The application follows a client-server architecture with the following components:

1. **Frontend (React)**: This is the user interface where users input their preferences and requirements for their desired holiday. It communicates with the backend API to send user inputs and receive holiday recommendations.

2. **Backend (FastAPI)**: This component consists of various APIs that handle different tasks:

- User Input API: Receives user inputs from the frontend and processes them for further analysis.
- RAG API: Utilizes LangChain's RAG implementation to retrieve relevant information from the Cosmos DB vCore database based on user inputs.
- OpenAI API: Integrates with Azure's OpenAI API to generate personalized holiday recommendations using the GPT-3.5 Turbo model and the context retrieved from the RAG API.
- Data Retrieval APIs: Fetch flight, hotel, activity, and local food information from external APIs or databases using Microsoft Cognitive Services (Bing Web Search API, Bing Image Search API, Bing Entity Search API).

3. **Cosmos DB vCore (MongoDB)**: This is a vectorized database that stores holiday destination information, including images, descriptions, and other relevant details. It is used by the RAG API to retrieve relevant information based on user inputs.

4. **External APIs (Microsoft Cognitive Services)**: The application integrates with Microsoft Cognitive Services to fetch additional information such as flight prices, hotel availability, local activities, and food options. These APIs include:

- Bing Web Search API: Used to fetch information about flights, hotels, activities, and local food options.
- Bing Image Search API: Used to retrieve images related to holiday destinations, activities, and local food.
- Bing Entity Search API: Used to retrieve structured information about entities (e.g., hotels, restaurants, attractions) related to the holiday destination.

The workflow of the application is as follows:

1. The user visits the welcome page and provides initial information about their desired holiday.
2. The user is then redirected to a refinement page where they can further specify their requirements and preferences.
3. The frontend sends the user inputs to the backend's User Input API.
4. The User Input API processes the inputs and sends them to the RAG API.
5. The RAG API retrieves relevant information from the Cosmos DB vCore database using vector similarity search.
6. The retrieved information is sent to the OpenAI API, along with the user inputs.
7. The OpenAI API generates personalized holiday recommendations using the GPT-3.5 Turbo model and the context provided by the RAG API.
8. The backend Data Retrieval APIs fetch additional information related to the recommended holiday destinations, such as flight prices, hotel availability, local activities, and food options, using Microsoft Cognitive Services (Bing Web Search API, Bing Image Search API, Bing Entity Search API).
9. The recommendations, along with the additional information fetched from external APIs, are sent back to the frontend and displayed to the user.
10. The user can further refine their preferences or proceed with booking flights, hotels, or activities based on the recommendations.

This design allows for efficient retrieval of relevant information from the database and personalized holiday recommendations using the power of OpenAI's language model and LangChain's RAG optimization. Additionally, it leverages Microsoft Cognitive Services to fetch up-to-date information about flights, hotels, activities, and local food options, enhancing the overall user experience.
