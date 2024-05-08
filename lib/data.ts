import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaNetworkWired } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  
    {
      "title": "Turing__📍 Senior Machine Learning Engineer",
      "company": "Turing",
      "location": "Remote, USA",
      "description": "Lead development of advanced ML models using TensorFlow and PyTorch. Collaborate with teams to deploy scalable solutions, leveraging technologies like Docker and Kubernetes. Research new technologies such as Transformer architectures and mentor junior members in ML best practices.",
      icon: React.createElement(FaNetworkWired),
      "date": "Apr 2024 - Present"
    },
    {
      "title": "Gotech Haripur__📍 Python ML Engineer",
      "company": "Gotech Haripur",
      "location": "Haripur, Pakistan",
      "description": "Developed Python applications and implemented ML solutions using scikit-learn and TensorFlow. Collaborated with teams to design and deploy ML models, integrating them with web applications using Flask. Contributed to projects involving Python and ML technologies, including natural language processing and computer vision.",
      icon: React.createElement(CgWorkAlt),
      "date": "Nov 2022 - May 2023"
    },
    {
      "title": "ALGO ALLIANCE__📍 Senior Software Engineer",
      "company": "ALGO ALLIANCE",
      "location": "Remote, UAE",
      "description": "Led development of blockchain applications using Python and Solidity, with a focus on Ethereum. Collaborated with teams to define project requirements and implemented solutions using web3.py. Stayed updated with latest blockchain trends, attending conferences and workshops.",
      icon: React.createElement(CgWorkAlt),
      "date": "August 2021 - August 2022"
    },
    {
      "title": "Mad IT House__📍 Python Developer",
      "company": "Mad IT House",
      "location": "Islamabad, Pakistan",
      "description": "Developed Python applications using Flask, Django, and Pandas for web development and data analysis. Ensured code quality and performance, implementing best practices and conducting code reviews. Conducted code reviews and provided feedback to team members, improving overall code quality.",
      icon: React.createElement(CgWorkAlt),
      "date": "June 2021 - June 2022"
    },
  
] as const;

export const projectsData = [
  
    {
      "title": "Sentiment Analysis with LSTM",
      "description": "Use LSTM for sentiment analysis.",
      "tags": ["TensorFlow", "Keras", "NLTK", "spaCy", "scikit-learn"]
    },
    {
      "title": "Image Classification with CNN",
      "description": "Classify images using CNN.",
      "tags": ["TensorFlow", "Keras", "OpenCV", "PIL", "scikit-image"]
    },
    {
      "title": "Stock Price Prediction with ARIMA",
      "description": "Predict stock prices with ARIMA.",
      "tags": ["pandas", "statsmodels"]
    },
    {
      "title": "Object Detection with YOLO",
      "description": "Detect objects with YOLO.",
      "tags": ["Darknet", "OpenCV"]
    },
    {
      "title": "Speech Recognition with DeepSpeech",
      "description": "Recognize speech with DeepSpeech.",
      "tags": ["DeepSpeech"]
    },
    {
      "title": "Recommendation System with Matrix Factorization",
      "description": "Create a recommendation system.",
      "tags": ["Surprise", "pandas", "numpy"]
    },
    {
      "title": "GAN for Image Generation",
      "description": "Generate images with GAN.",
      "tags": ["TensorFlow", "Keras", "OpenCV", "PIL"]
    },
    {
      "title": "RL for Game Playing",
      "description": "Use RL for game playing.",
      "tags": ["TensorFlow", "Keras", "gym"]
    },
    {
      "title": "Text Summarization with Transformer",
      "description": "Summarize text with Transformer.",
      "tags": ["Transformers"]
    },
    {
      "title": "Fraud Detection with Isolation Forest",
      "description": "Detect fraud with Isolation Forest.",
      "tags": ["scikit-learn"]
    },
    {
      "title": "Time Series Forecasting with LSTM",
      "description": "Forecast time series with LSTM.",
      "tags": ["TensorFlow", "Keras", "pandas"]
    },
    {
      "title": "Clustering with K-Means",
      "description": "Cluster data with K-Means.",
      "tags": ["scikit-learn"]
    },
    {
      "title": "Semantic Segmentation with U-Net",
      "description": "Segment objects with U-Net.",
      "tags": ["TensorFlow", "Keras", "scikit-image"]
    },
    {
      "title": "Speech Synthesis with Tacotron",
      "description": "Synthesize speech with Tacotron.",
      "tags": ["TensorFlow", "Keras"]
    },
    {
      "title": "Neural Style Transfer",
      "description": "Transfer styles between images.",
      "tags": ["TensorFlow", "Keras"]
    },
    {
      "title": "Deep RL for Robotics",
      "description": "Use deep RL for robotics.",
      "tags": ["TensorFlow", "Keras", "gym"]
    }
  
  
] as const;

export const skillsData = [
  
    "Python",
    "AI",
    "Data Science",
    "Machine Learning",
    "NodeJS",
    "Docker",
    "Blockchain",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "SQL"
  
  
] as const;
