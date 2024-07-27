### Run Commands

`docker run -p <host_port>:<docker_port> <image_name:image_tag>`

### Detached Mode

`docker run -d -p <host_port>:<docker_port> <image_name:image_tag>`

### logs

`docker logs <container_id>` (some unique characters)
`docker logs 55bb`
`docker logs -f <container_id>` -> (-f -> follow)

### show the current images

`docker images`

### show the list of containers

`docker container ls -> shows the only running containers`

`docker container ls -a -> shows all the containers`

### stop the container

`docker container stop <container_id>`

### docker stop container command:

`docker container stop <image_id>`
`docker container stop 55bb`

### docker pull image command:

`docker pull <image_name>` —------------ (pull the latest version)

### docker search image command:

`docker search <image_name>`

### docker image history command:

`docker image history <image_name>`
`docker image history <image_id>`

### docker image history details command:

`docker image inspect <image_id>`

### docker image remove command:

`docker image remove <image_name>`

### docker container remove command:

`docker container rm <container_id>`

### docker container stop command:

`docker container stop <container_id>`

### docker container pause command:

`docker container pause <container_id>`

### docker container unpause command:

`docker container unpause <container_id>`

### docker container kill command:

`docker container kill <container_id>`

### docker container history details command:

`docker container inspect <container_id>`

### docker container prune command: (remove all stopped containers)

`docker container prune`

### docker system command:

`docker system`

### docker system disk usage command:

`docker system df`

### docker get real time events from the server command:

`docker system events`

### docker system-wide information command:

`docker system info`

### docker Remove unused data command:

`docker system prune`

### docker top command provides information about the CPU, memory, and swap usage if you run it inside a Docker container

`docker top <container_id>`

### docker stats command returns a live data stream for running containers

`docker stats <container_id>`

### docker run with memory usage

`docker container run -p <host_port>:<docker_port> -d -m 512m <image_name:image_tag>`

### docker run with memory usage and cpu usage

`docker container run -p <host_port>:<docker_port> -d -m 512m --cpu-quota=50000 <image_name:image_tag>`

### docker build image command

`docker build -t <image_name:image_tag> <directory>`

### push docker image to docker registry command

`docker push <docker_id>/<image_name:image_tag>`
