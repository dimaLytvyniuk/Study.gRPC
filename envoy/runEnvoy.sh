docker kill envoy
docker rm envoy

docker build . -t envoy
docker run -p 8080:8080 -p 9901:9901 --name envoy envoy
