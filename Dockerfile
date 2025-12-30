FROM node:24-alpine AS build-stage

WORKDIR /usr/local/app

COPY ./package.json ./package-lock.json ./
RUN npm ci

COPY ./ ./
RUN npm run build

FROM nginx:1.29-alpine AS runtime-stage
COPY --from=build-stage /usr/local/app/dist /usr/share/nginx/html