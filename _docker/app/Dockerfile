FROM php:8.2-fpm

# Set working directory
WORKDIR /var/www

RUN apt-get update && apt-get install -y \
      apt-utils \
      libpq-dev \
      libpng-dev \
      libzip-dev \
      zip unzip \
      vim \
      curl \
      libzip-dev \
      libonig-dev \
      nano \
      zsh \
      automake \
      mariadb-client \
      software-properties-common \
      gcc \
      g++ \
      make \
      rsync \
      fzf \
      sudo \
      whois \
      git && \
      docker-php-ext-install pdo_mysql && \
      docker-php-ext-install bcmath && \
      docker-php-ext-install gd && \
      docker-php-ext-install zip && \
      apt-get clean && \
      rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

COPY ./_docker/app/php.ini /usr/local/etc/php/conf.d/php.ini

# Install composer
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN curl -sS https://getcomposer.org/installer | php -- \
    --filename=composer \
    --install-dir=/usr/local/bin


