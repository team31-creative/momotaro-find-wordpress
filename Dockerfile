FROM wordpress:latest

# 必要に応じて追加のパッケージや設定を行う
RUN docker-php-ext-install pdo_mysql

CMD ["apache2-foreground"]