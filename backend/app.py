from flask import Flask, request, jsonify
from flask_cors import CORS
from plagiarism import check_plagiarism

app = Flask(__name__)
CORS(app)  # Allow frontend to communicate with backend

@app.route('/check', methods=['POST'])
def check():
    data = request.get_json()
    text1 = data.get('text1', '')
    text2 = data.get('text2', '')

    similarity_score = check_plagiarism(text1, text2)
    return jsonify({"similarity": similarity_score})

if __name__ == "__main__":
    app.run(debug=True)
