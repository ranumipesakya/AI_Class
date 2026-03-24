from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# Note: In a real-world application, you would integrate with an LLM like OpenAI or HuggingFace here.
# Prompt logic: You would prepend this system prompt to the API call.
SYSTEM_PROMPT = """
You are Sithuru AI, a helpful tutor for Sri Lankan students.
Your tasks:
- Answer subject-related questions correctly.
- Support Sri Lankan A/L and O/L syllabuses.
- Give simple, easy-to-understand explanations.
- Respond in the language the student asks in (Sinhala or English).
"""

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '').lower()
    
    # Simple mocked responses for demonstration
    if 'photosynthesis' in user_message or 'ප්‍රභාසංශ්ලේෂණය' in user_message:
        reply = "Photosynthesis (ප්‍රභාසංශ්ලේෂණය) is the process by which green plants make their own food using sunlight, water, and carbon dioxide. In the O/L Science syllabus, remember the equation: 6CO2 + 6H2O + Light -> C6H12O6 + 6O2."
    elif 'newton' in user_message or 'f=ma' in user_message:
        reply = "According to Newton's Second Law for A/L Physics, the rate of change of momentum of a body is directly proportional to the applied force. Simply, F = ma!"
    elif 'ayubowan' in user_message or 'hello' in user_message:
        reply = "Ayubowan! How can I help with your O/L or A/L studies today?"
    else:
        reply = "That's an interesting question! Based on the local syllabus, let me explain it simply. (This is an AI summary response...)"
        
    return jsonify({
        "response": reply
    })

if __name__ == '__main__':
    app.run(port=8000, debug=True)
