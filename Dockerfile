FROM phusion/passenger-nodejs:0.9.30
LABEL maintainer="PurdueUSB <usb@cs.purdue.edu>"

# Automatically set by Phusion
# ENV NODE_ENV prodction

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

## Custom Stuff now ##
ENV DEBIAN_FRONTEND noninteractive
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -y && apt-get install -y yarn

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
RUN cp -r ./dist/ ./backend/public
COPY --chown=app:app ./backend/ /home/app/openideas/

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Enable nginx and passenger
RUN rm /etc/nginx/sites-enabled/default
ADD nginx-passenger.conf /etc/nginx/sites-enabled/openideas.conf
RUN rm -f /etc/service/nginx/down
