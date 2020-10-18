# Base image, this is a multi architecture image, see manifest for details
FROM python:3.9.0-alpine3.12

WORKDIR /usr/src/app

COPY . .

# Not removing the build dependencies, will optimize the image later
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev
RUN pip install psycopg2
	
# Change home path as azure file mount doesn't accept "." in path
run mkdir /data
ENV KOLIBRI_HOME="/data"

EXPOSE 80

CMD [ "python", "./kolibri_server.py" ]