FROM envoyproxy/envoy:latest

COPY . /etc/envoy

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log
