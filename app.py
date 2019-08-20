from flask import Flask, url_for, render_template
import pandas as pd
from classes import lectureFichier

app = Flask('__name__')


@app.route('/')
def index():
    return render_template('index.html', produits=lectureFichier())

@app.route('/listeProduits')
def listeProduits():
    return lectureFichier()

if __name__ == '__main__':
    app.run(debug=True)
