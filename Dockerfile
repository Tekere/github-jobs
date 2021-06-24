
FROM node:12.4.0-alpine

WORKDIR /app

# コマンド実行
# linux 最新化、
RUN apk update
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend .

ENV HOST 0.0.0.0
EXPOSE 3000
