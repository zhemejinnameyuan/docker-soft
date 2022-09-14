FROM nginx:1.14

# set timezome
ENV TZ=Asia/Shanghai
RUN /bin/cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone