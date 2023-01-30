# FROM node:16-alpine
# # Create app directory
# WORKDIR /usr/src/app
# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./
# RUN npm install
# RUN npm run build
# # If you are building your code for production
# # RUN npm ci --only=production
# # Bundle app source
# COPY . .
# CMD [ "npm", "start" ]



FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm i

RUN npm run build

EXPOSE 3000

COPY . /app

# RUN npm run build

# CMD ["npm", "run", "dev"]

# -----

# version: "3.7"

# services:
#   project-name:
#     image: project-name
#     build:
#       context: .
#       dockerfile: Dockerfile
#     container_name: project-name
#     restart: always
#     volumes:
#       - ./:/app
#       - /app/node_modules
#       - /app/.next
#     ports:
#       - "3000:3000"