import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

nltk.download('punkt')

def check_plagiarism(text1, text2):
    # Tokenize and clean text
    documents = [text1, text2]
    
    # Convert text to TF-IDF vectors
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(documents)

    # Compute cosine similarity
    similarity = cosine_similarity(tfidf_matrix[0], tfidf_matrix[1])
    return round(similarity[0][0] * 100, 2)  # Convert to percentage
