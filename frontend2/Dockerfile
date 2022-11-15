FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# --> /app/build <--

FROM nginx
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html

#run... nginx ja tem o comando padrão pra iniciar

