import subprocess
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def root():
    return render_template("index.html")


@app.route("/abc", methods=["POST"])
def open_edge():
    subprocess.Popen("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
    return "success"


if __name__ == "__main__":
    app.run(host="localhost", port=5656)
