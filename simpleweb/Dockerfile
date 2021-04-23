#Specify base image
FROM node:14.14.0-alpine

#created directory for copy of files from local machine
WORKDIR /usr/app

#COPY is used copy from "your machine" relative to build context. Places copies in container
#install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

#default command
CMD ["npm", "start"]