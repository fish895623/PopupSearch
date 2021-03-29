import subprocess
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def root():
    # r = request.form["data"]
    # print(r)
    return render_template("index.html")


@app.route("/", methods=["POST"])
def root_post():
    r = request.form["data"]
    # 검색 엔진별 ?search ~~ 이런것들의 기본적의 패턴을 작성
    subprocess.Popen(
        ["C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", r]
    )
    return render_template("index.html", data=r)


# /abc에 POST 메세지를 보낼 경우 엣지가 켜짐
@app.route("/abc", methods=["POST"])
def open_edge():
    subprocess.Popen("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
    return "success"


if __name__ == "__main__":
    app.run(host="localhost", port=5656)
