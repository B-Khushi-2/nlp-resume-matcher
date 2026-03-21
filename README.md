# 🤖 NLP AI Resume Matcher App

A smart resume screening web application powered by **Natural Language Processing (NLP)**. This tool helps recruiters and hiring managers automatically rank and shortlist resumes based on how well they match a given job description — saving hours of manual screening.

---

## 🎯 Problem Statement

Recruiters receive hundreds of resumes for a single job posting. Manually reading and comparing each resume against the job requirements is:

- ⏰ Time-consuming
- 😓 Mentally exhausting
- ❌ Prone to human bias and error

**This app solves that problem** by using NLP to automatically score and rank resumes based on their relevance to the job description.

---

## 💡 What Does This App Do?

1. The recruiter pastes a **Job Description** into the app
2. The recruiter uploads **multiple resumes** (PDF, DOCX, or TXT format)
3. The app reads and extracts text from all the resumes
4. It uses **NLP algorithms** to compare each resume with the job description
5. It ranks and displays the **Top 5 most relevant resumes** along with a **similarity score**

---

## 🧠 How the NLP Works

### Step 1 — Text Extraction

When a resume is uploaded, the app extracts raw text from it depending on the file format:

- `.pdf` files → extracted using **PyPDF2**
- `.docx` files → extracted using **docx2txt**
- `.txt` files → read directly using Python's file reader

### Step 2 — TF-IDF Vectorization

**TF-IDF** stands for **Term Frequency - Inverse Document Frequency**.

- **Term Frequency (TF)** — How often a word appears in a document
- **Inverse Document Frequency (IDF)** — How rare or important that word is across all documents

Together, TF-IDF converts text into **numerical vectors** (lists of numbers) that represent how important each word is in the context of all the documents.

For example, words like `Python`, `Docker`, `Machine Learning` get high scores in a tech job context, while common words like `the`, `and`, `is` get low scores.

### Step 3 — Cosine Similarity

Once all texts are converted to vectors, the app calculates **Cosine Similarity** between:

- The **Job Description vector**
- Each **Resume vector**

Cosine Similarity measures the **angle** between two vectors:

- If the angle is **0°** → similarity = **1.0** (perfect match)
- If the angle is **90°** → similarity = **0.0** (no match at all)

The closer the score is to **1**, the more relevant the resume is to the job.

### Step 4 — Ranking

All resumes are sorted by their similarity scores in descending order. The **Top 5 resumes** are displayed with their scores.

---

## 📊 Understanding the Similarity Score

| Score     | Meaning            |
| --------- | ------------------ |
| 0.7 – 1.0 | 🟢 Excellent match |
| 0.4 – 0.6 | 🟡 Good match      |
| 0.1 – 0.3 | 🟠 Weak match      |
| 0.00      | 🔴 No similarity   |

> In real-world resume matching, scores typically fall between **0.1 and 0.5**. A score above **0.3** is considered a strong match because resumes and job descriptions are written differently even when they are a great fit.

---

## 🛠️ Tech Stack

| Component    | Technology            | Purpose                                    |
| ------------ | --------------------- | ------------------------------------------ |
| Backend      | Python, Flask         | Web server and routing                     |
| NLP          | scikit-learn          | TF-IDF vectorization and cosine similarity |
| PDF Parsing  | PyPDF2                | Extract text from PDF resumes              |
| DOCX Parsing | docx2txt              | Extract text from Word resumes             |
| Frontend     | HTML, CSS, JavaScript | User interface                             |
| Deployment   | Render / Gunicorn     | Production web server                      |

---

## 📁 Project Structure

```
NLP AI RESUME MATCHER APP/
│
├── main.py                  # Main Flask application and all NLP logic
│
├── templates/
│   └── matchresume.html     # Frontend HTML page (Jinja2 template)
│
├── static/
│   ├── style.css            # Custom dark-themed styling
│   └── script.js            # File upload interactions and animations
│
├── uploads/                 # Temporarily stores uploaded resumes
│
├── Resumes/                 # Sample resumes for testing
│
├── requirements.txt         # Python dependencies
│
└── README.md                # Project documentation
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Python 3.8 or above
- pip (Python package manager)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/B-Khushi-2/nlp-resume-matcher.git
cd nlp-resume-matcher
```

### 2. Create a virtual environment

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate
```

### 3. Install all dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the application

```bash
python main.py
```

### 5. Open in your browser

```
http://127.0.0.1:5000
```

---

## 📖 How to Use

1. **Open the app** in your browser
2. **Paste the Job Description** in the text area — include skills, responsibilities, and requirements
3. **Upload Resumes** — select 5 or more resumes in PDF, DOCX, or TXT format
4. Click **"Analyze & Match"**
5. View the **ranked results** with similarity scores

---

## 📌 Tips for Best Results

- Upload **at least 5 resumes** for meaningful comparison
- The more **detailed the job description**, the more accurate the matching
- Resumes that use **keywords from the job description** will score higher
- Works best with **text-based PDFs** (not scanned images)

---

## 🔮 Future Improvements

- [ ] Keyword highlighting to show why a resume ranked high
- [ ] Export results as CSV for recruiters
- [ ] Semantic matching using BERT or sentence-transformers
- [ ] User login and history of past matches
- [ ] Support for bulk resume ZIP uploads
- [ ] Dashboard with analytics and charts

---

## 👩‍💻 Author

**Khushi B**  
GitHub: [@B-Khushi-2](https://github.com/B-Khushi-2)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
