#First word is instruction telling Docker Server what to do
#Second part is an argument for the instruction

# Use an existing docker image as a base
FROM alpine
#Downloaded alpine container

#Download and install a dependency
RUN apk add --update gcc
RUN apk add --update redis

#Gets image from previous step
#Create container out of it             Container
#Run 'apk add --update redis' it        container With mondified FS
#Take snapshot of that container's FS   FS Snapshot
#Shut down temporary container
#Get image ready for next instruction
#if dependency is added(gcc) and build . is run, it will use the previously cached image of redis.
#if dependency order is changed, it will rebuild from the beginning ignoring the cached build.

#a fast way to run container is -t dockerId/project:version
#ex -t userId/redis:latest


#Tell image what to do when it starts as a container
CMD [ "redis-server" ]
#Get image from last step
#create container out of it                                       Container
#Tell container it should run 'redis-server' when started          Container with modified primary command
#shut down temporary container
#Get image ready for next instruction

#Output is the image generated from previous step