FROM node:latest

RUN mkdir -p /usr/src/nas-website
WORKDIR /usr/src/nas-website
COPY . .

RUN npm ci && npm cache clean --force
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]


# FROM nginx:latest
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY ./nginx/mime.types  /etc/nginx/mime.types
# COPY ./public /usr/share/nginx/html
# RUN chmod 755 -R /usr/share/html