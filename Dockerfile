FROM node:17-alpine

RUN mkdir -p /usr/src/nas-website
WORKDIR /usr/src/nas-website
COPY . .

RUN npm ci && npm cache clean --force
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=30001

EXPOSE 30001

ENTRYPOINT ["node", ".output/server/index.mjs"]