FROM docker.d.aiengines.ir/nginx:alpine

COPY dist /usr/share/nginx/html

COPY /nginx.conf /etc/nginx/conf.d/default.conf

COPY /entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
