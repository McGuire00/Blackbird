FROM python:3

# set a directory for the app
WORKDIR /django

# install app dependencies
COPY requirements.txt ./

# install dependencies
RUN pip install -r requirements.txt

# define the port number the container should expose
EXPOSE 8000

# add app
COPY . .

# run the command
CMD ["python", "manage.py", "runserver"]