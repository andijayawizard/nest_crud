# build local for development
FROM node:18-alpine as development
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
# RUN npm i -g npm@latest
RUN npm ci 
COPY --chown=node:node . .
# RUN npx prisma db push
USER node

# build for production
FROM node:18-alpine as build
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
RUN npm ci 
RUN npm run build
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force
USER node

# production
FROM node:18-alpine as production
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
# RUN npx prisma generate
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
# EXPOSE 8080
CMD ["node", "dist/main.js"]
