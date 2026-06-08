/* =====================================================
   projects.js  —  All 22 verified GitHub projects
   ===================================================== */

/* ── PROJECTS DATA ── */
const P=[
  {t:"Autonomous AI Code Repair Platform",c:"ai",m:"1,436 tests passing · 0 retries",icon:"🤖",d:"Production-grade LangGraph multi-agent platform that ingests GitHub issues, generates search/replace patches, and validates in isolated Docker sandboxes via pytest, Ruff, Mypy with stateful retry loops and SQLite checkpointing.",s:["LangGraph","LiteLLM","Docker","GitHub API","Pytest","Ruff","SQLite"],u:"https://github.com/sucharitha1812/autonomous-ai-code-repair-platform"},
  {t:"RAG Document Intelligence Platform",c:"ai",m:"PDF · DOCX · TXT ingestion",icon:"📄",d:"Full-stack RAG system with FastAPI backend, React/TypeScript frontend, ChromaDB vector store, HuggingFace sentence embeddings, and Groq-powered Q&A over user-uploaded documents.",s:["LangChain","ChromaDB","FastAPI","React","HuggingFace","Groq"],u:"https://github.com/sucharitha1812/rag-document-intelligence-platform"},
  {t:"Agentic Research Workflow Platform",c:"ai",m:"Multi-agent · self-correcting",icon:"🔍",d:"Self-correcting LangGraph agents that decompose queries, retrieve web evidence via Tavily, score confidence, retry on weak results, and synthesize citation-grounded answers.",s:["LangGraph","FastAPI","React","Ollama","Llama 3.2","Tavily"],u:"https://github.com/sucharitha1812/agentic-research-workflow-platform"},
  {t:"Context-Aware Browser Assistant",c:"ai",m:"100% local · zero API calls",icon:"🌐",d:"Privacy-first Chrome extension using local Llama 3.2 inference for webpage summarization, contextual Q&A, and right-click text explanation — all on-device.",s:["React","TypeScript","Chrome MV3","Ollama","Llama 3.2"],u:"https://github.com/sucharitha1812/context-aware-browser-assistant"},
  {t:"Multimodal Audio Generation Platform",c:"ai",m:"~40% CLAPScore improvement at n=5",icon:"🎵",d:"Generates N audio candidates per text prompt using AudioLDM, scores with CLAP text-audio alignment, returns best — ~40% CLAPScore improvement at n=5 with no retraining.",s:["PyTorch","AudioLDM","CLAP","Diffusers","HuggingFace"],u:"https://github.com/sucharitha1812/multimodal-audio-generation-platform"},
  {t:"Real-Time IoT Air Quality Pipeline",c:"de",m:"1,000+ events/min · <5s latency",icon:"⚡",d:"Kafka + Spark Structured Streaming + MongoDB processing 1,000+ IoT sensor events per minute with under 5-second end-to-end latency for pollutant metrics and real-time alerting.",s:["Kafka","Spark","MongoDB","Python","Docker"],u:"https://github.com/sucharitha1812/real-time-iot-air-quality-pipeline"},
  {t:"Formula 1 Predictive Analytics Platform",c:"de",m:"API ingestion → BI dashboards",icon:"🏎️",d:"End-to-end: Ergast API ingestion, PostgreSQL warehouse, dbt feature marts, XGBoost race prediction, Airflow orchestration, Power BI/Tableau dashboards.",s:["PostgreSQL","dbt","Airflow","XGBoost","Power BI","Tableau"],u:"https://github.com/sucharitha1812/formula1-predictive-analytics-platform"},
  {t:"MovieLens Data Warehouse",c:"de",m:"Star schema · 1 fact, 3 dims",icon:"🎬",d:"PostgreSQL star-schema warehouse with Python ETL, staging tables, dimensional modeling, analytical SQL, and Tableau dashboards for ratings and user behavior.",s:["PostgreSQL","Python","SQL","Tableau","ETL"],u:"https://github.com/sucharitha1812/movielens-data-warehouse"},
  {t:"StreamFlix DB Performance Optimization",c:"de",m:"Up to 96.4% query improvement",icon:"📺",d:"PostgreSQL query tuning across 1,000,000 synthetic events using indexing, partitioning, EXPLAIN ANALYZE profiling, and Docker benchmarking.",s:["PostgreSQL","Indexing","Partitioning","Docker"],u:"https://github.com/sucharitha1812/streamflix-db-performance-optimization"},
  {t:"Hadoop E-Commerce Analytics",c:"de",m:"Dockerized cluster · MapReduce",icon:"🛒",d:"Dockerized Hadoop cluster (HDFS + YARN) running MRJob MapReduce jobs for country-level transaction analysis and high-value customer identification.",s:["Hadoop","HDFS","YARN","MRJob","Docker"],u:"https://github.com/sucharitha1812/hadoop-ecommerce-analytics"},
  {t:"AI Retail Demand Forecasting",c:"ds",m:"10,000+ training timesteps",icon:"📈",d:"TFT time-series forecasting + PPO reinforcement learning across 10,000+ timesteps for demand prediction, pricing simulation, and revenue optimization.",s:["PyTorch","TFT","PPO","Reinforcement Learning","SHAP"],u:"https://github.com/sucharitha1812/ai-retail-demand-forecasting-dynamic-pricing"},
  {t:"ECG Anomaly Detection VAE",c:"ds",m:"0.96 AUC",icon:"🫀",d:"Unsupervised ECG anomaly detection using Variational Autoencoder and reconstruction error classification — 0.96 AUC on healthcare cardiac time-series.",s:["PyTorch","VAE","Reconstruction Error","ROC-AUC"],u:"https://github.com/sucharitha1812/ecg-anomaly-detection-vae"},
  {t:"Mental Health Risk Prediction",c:"ds",m:"83.3% validation recall",icon:"🧠",d:"XGBoost depression risk classifier with 83.3% validation recall, deployed as a containerized Flask REST API in Docker for real-time risk scoring.",s:["XGBoost","Flask","Docker","Scikit-learn"],u:"https://github.com/sucharitha1812/mental-health-risk-prediction-system"},
  {t:"Obesity Classification ML",c:"ds",m:"91.8% SVM accuracy",icon:"⚕️",d:"Multi-class lifestyle obesity classification with SVM at 91.8% accuracy, feature selection via RFE and SelectKBest.",s:["Scikit-learn","SVM","Random Forest","RFE"],u:"https://github.com/sucharitha1812/obesity-classification-ml"},
  {t:"Sign Language Recognition CNN",c:"ds",m:"98.93% accuracy · 24 ASL classes",icon:"🤟",d:"Custom PyTorch CNN achieving 98.93% accuracy across 24 ASL gesture classes on the Sign Language MNIST dataset.",s:["PyTorch","CNN","Computer Vision"],u:"https://github.com/sucharitha1812/sign-language-recognition-cnn"},
  {t:"Air Pollution & Life Expectancy",c:"bi",m:"4 global datasets integrated",icon:"🌍",d:"Interactive Tableau dashboard linking PM2.5, GDP per capita, life expectancy, and public health expenditure across global health and environmental datasets.",s:["Tableau","Data Visualization","EDA"],u:"https://github.com/sucharitha1812/air-pollution-life-expectancy-analysis"},
  {t:"Advertising Campaign Analysis",c:"bi",m:"A/B test + regression",icon:"📣",d:"Retargeting campaign analysis with treatment/control comparison, conversion rates, cross-tabulation, and regression to evaluate lift and marketing ROI.",s:["R","A/B Testing","Regression"],u:"https://github.com/sucharitha1812/advertising-campaign-analysis"},
  {t:"Fake News Detection ML",c:"nlp",m:"93.4% accuracy",icon:"📰",d:"TF-IDF + SVM, Logistic Regression, and Naive Bayes pipeline on WELFake dataset — 93.4% fake news detection accuracy.",s:["NLP","TF-IDF","SVM","Scikit-learn"],u:"https://github.com/sucharitha1812/fake-news-detection-ml"},
  {t:"AI-Generated Text Detection",c:"nlp",m:"BERT + perplexity scoring",icon:"🔎",d:"BERT embeddings, cosine similarity, readability metrics, and perplexity/burstiness scoring to classify human vs AI-generated text.",s:["BERT","Pinecone","Streamlit"],u:"https://github.com/sucharitha1812/ai-generated-text-detection-system"},
  {t:"Multi-Region Fleet IoT DB",c:"db",m:"3-node geo-partitioned cluster",icon:"🌐",d:"3-node CockroachDB cluster with geo-partitioned regional data, distributed joins, and EXPLAIN DISTSQL analysis.",s:["CockroachDB","Docker","SQL"],u:"https://github.com/sucharitha1812/multi-region-fleet-iot-database-architecture"},
  {t:"Fleet Telemetry Cassandra Platform",c:"db",m:"Query-first schema design",icon:"🗄️",d:"Query-first Cassandra schema for fleet IoT telemetry with CAP theorem comparison against CockroachDB.",s:["Cassandra","CQL","Docker"],u:"https://github.com/sucharitha1812/fleet-telemetry-cassandra-platform"},
  {t:"Fleet Telemetry MongoDB Platform",c:"db",m:"Aggregation pipelines + indexing",icon:"📦",d:"Document-first MongoDB redesign with aggregation pipelines, indexing strategies, and consistency propagation demos.",s:["MongoDB","JavaScript","Docker"],u:"https://github.com/sucharitha1812/fleet-telemetry-mongodb-platform"},
];
const CL={de:"b-de",ai:"b-ai",ds:"b-ds",bi:"b-bi",db:"b-db",nlp:"b-nlp"};
const CN={de:"Data Eng",ai:"AI / GenAI",ds:"Data Science",bi:"Analytics & BI",db:"Databases",nlp:"NLP / CV"};
const IB={de:"rgba(91,184,245,.14)",ai:"rgba(212,168,67,.14)",ds:"rgba(155,123,255,.13)",bi:"rgba(62,203,176,.12)",db:"rgba(240,123,107,.12)",nlp:"rgba(244,114,182,.12)"};

function render(cat){
  const g=document.getElementById("pgrid");
  const f=cat==="all"?P:P.filter(p=>p.c===cat);
  document.getElementById("pcount").textContent=f.length+(f.length===1?" repository":" repositories");
  g.innerHTML=f.map(p=>`
    <a class="pc" href="${p.u}" target="_blank" rel="noopener" data-c="${p.c}">
      <div class="pc-inner">
        <div class="pc-top">
          <span class="pc-badge ${CL[p.c]}">${CN[p.c]}</span>
          <svg class="pc-ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </div>
        <div class="pc-icon" style="background:${IB[p.c]}">${p.icon}</div>
        <div class="pc-title">${p.t}</div>
        ${p.m?`<div class="pc-metric">${p.m}</div>`:""}
        <div class="pc-desc">${p.d}</div>
        <div class="pc-stack">${p.s.map(x=>`<span class="pc-tag">${x}</span>`).join("")}</div>
      </div>
    </a>`).join("");
}

document.getElementById("fbar").addEventListener("click",e=>{
  const b=e.target.closest(".fp"); if(!b)return;
  document.querySelectorAll(".fp").forEach(x=>x.classList.remove("on"));
  b.classList.add("on"); render(b.dataset.c);
});
render("all");
