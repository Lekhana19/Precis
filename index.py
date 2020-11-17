from flask import Flask, render_template, url_for, flash, redirect, jsonify, request, make_response
from PIL import Image
import requests
from io import BytesIO
import secrets
import json
import main

app = Flask(__name__)
app.config['SECRET_KEY'] = 'eedd328838e5cf4f7e4b2909ee442f364959cd6375bc49554df2972e7524a814'
app.config['WTF_CSRF_ENABLED'] = False


@app.route("/")
def index():
    return 'Method Not Allowed'


@app.route("/url", methods=['POST', 'GET'])
def url():
    url = request.json['image']
    # Reading Image
    response = requests.get(url)
    img = Image.open(BytesIO(response.content))
    img.save("download.jpg")

    randomString = main.generate_text(img)
    # BlackBox Ends

    return make_response(jsonify({'text': randomString}), 200)


if __name__ == '__main__':
    app.run()



