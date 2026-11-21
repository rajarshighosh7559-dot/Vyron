
import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from google import genai
from google.genai import types

load_dotenv()

app = FastAPI(
    title="VYRON API",
    description="AI-assisted consequence analysis platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise RuntimeError("GEMINI_API_KEY is missing from backend/.env")

client = genai.Client(api_key=api_key)


class ScenarioRequest(BaseModel):
    description: str = Field(min_length=10, max_length=2000)
    location: str = Field(min_length=2, max_length=150)
    duration: str
    domains: list[str]


class Effect(BaseModel):
    title: str
    explanation: str
    affected_domains: list[str]
    causal_reasoning: str
    evidence_needed: list[str]


class ScenarioAnalysis(BaseModel):
    scenario_summary: str
    initial_conditions: list[str]
    assumptions: list[str]
    missing_information: list[str]
    direct_effects: list[Effect]
    indirect_effects: list[Effect]
    possible_tradeoffs: list[str]
    overall_assessment: str


SYSTEM_INSTRUCTION = """
You are VYRON, an analytical assistant for exploring hypothetical
changes in interconnected real-world systems.

Your task is to reason carefully about a proposed scenario.

RULES:

1. Understand the actual intervention, location, duration and context.
2. Identify direct effects before indirect effects.
3. Explain causal connections step by step.
4. Consider all selected domains and relevant interactions between them.
5. Separate established facts from assumptions and hypotheses.
6. Never invent local statistics, population figures, traffic counts,
   measurements, capacities or percentages.
7. If information is missing, explicitly identify what is needed.
8. Do not claim that a mathematical simulation has been performed.
9. Explain possible positive and negative consequences.
10. Be specific to the scenario. Avoid generic filler.
11. Use cautious language where outcomes are uncertain.
12. If the scenario cannot be meaningfully assessed with available
    information, explain the limitations.

Your response must be useful to someone making a decision.
"""


@app.get("/")
def home():
    return {
        "project": "VYRON",
        "status": "online",
        "message": "VYRON analysis API is running"
    }


@app.post("/analyze", response_model=ScenarioAnalysis)
def analyze_scenario(request: ScenarioRequest):

    try:
        prompt = f"""
Analyze this hypothetical scenario.

SCENARIO:
{request.description}

LOCATION:
{request.location}

DURATION:
{request.duration}

SELECTED DOMAINS:
{", ".join(request.domains)}

Produce a detailed causal analysis.
Identify what could happen, why it could happen,
what depends on other effects, and what information
would be needed to estimate the consequences reliably.
"""

        response = client.models.generate_content(
            model="gemini-3.8-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_INSTRUCTION,
                response_mime_type="application/json",
                response_schema=ScenarioAnalysis,
                temperature=0.3,
            ),
        )

        if not response.parsed:
            raise ValueError("The AI returned an invalid structured response.")

        return response.parsed

    except Exception as error:
        print("VYRON analysis error:", str(error))
        raise HTTPException(
            status_code=502,
            detail="VYRON could not complete the analysis. Check the backend terminal."
        )
