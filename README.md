# Dev guide

## Prerequisites:
1. add `.env` file following the `.env_example`

2. replace `<app_id>` with your https://openweathermap.org/ key

## Running in docker compose

1. Run
   ```
   docker compose up
   ```
2. Open http://localhost:8080/

## Running in docker

1. Run
   ```
   docker build -t weather-app .
   docker run --name weather-app -p 8080:80 weather-app
   ```
2. Open http://localhost:8080/

## Running directly

required node: v24

1. run:

   ```console
   npm install
   npm run dev
   ```

2. enjoy the app
