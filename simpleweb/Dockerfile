#Specify base image
FROM node:14.14.0-alpine

#COPY is used copy from "your machine" relative to build context. Places copies in container
#install dependencies
COPY ./ ./
RUN npm install

#default command
CMD ["npm", "start"]