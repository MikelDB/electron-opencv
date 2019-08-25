FROM mikeldb/opencv-python-cameras:latest

WORKDIR /app

ADD requirements.txt /app/

RUN pip install -r requirements.txt

RUN pip install flask

CMD ['./bash']
