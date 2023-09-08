FROM node:17

# set a directory for the app
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# install dependencies
RUN npm install

# define the port number the container should expose
EXPOSE 3000

# add app
COPY . .

# run the command
CMD ["npm", "start"]