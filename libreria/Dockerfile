FROM node:alpine AS development

ENV NODE_ENV development

WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
CMD npm start