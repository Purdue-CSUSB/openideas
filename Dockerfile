FROM phusion/passenger-nodejs:0.9.30 as builder
LABEL maintainer="PurdueUSB <usb@cs.purdue.edu>"

## Custom Stuff now ##
ENV DEBIAN_FRONTEND noninteractive
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -y && apt-get install -y --no-install-recommends yarn && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /app

COPY ./package.json ./yarn.lock ./
RUN yarn

COPY ./backend/package.json ./backend/yarn.lock ./backend/
RUN cd ./backend && yarn

COPY . ./
RUN yarn build && cp -r ./dist/ ./backend/public/

# Multi Stage! #
# The first stage builds everything from source
# The second stage serves it

FROM phusion/passenger-nodejs:0.9.30
LABEL maintainer="PurdueUSB <usb@cs.purdue.edu>"

COPY --from=builder --chown=app:app /app/backend/ /home/app/openideas/

# Enable nginx and passenger
RUN rm /etc/nginx/sites-enabled/default && rm -f /etc/service/nginx/down
ADD nginx-passenger.conf /etc/nginx/sites-enabled/openideas.conf

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]
