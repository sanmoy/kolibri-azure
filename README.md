# kolibri-azure
Production grade deployment of kolibri on Microsoft Azure.

# About this Project

[Kolibri] is a [learning management system (LMS)], designed to run-on low-cost devices. It is so lightweight that it can even run on a [Raspberry Pi Zero]. Containerizing Kolibri is also extremely easy as it is written in python and using SQLite as a database. 

Kolibri is an enriched application which supports plugin architecture and many plugins like epub reader etc., are available out of the box. So, it can be used a cloud LMS application which shall cater to a small institution or facility.

But there are certain challenges to deploy it in popular clouds like Microsoft Azure. 

-	The container must be stateless so that it can be updated to latest bits without losing learner data or content. Attaching a volume mount in cloud need some steps.
-	SQLite doesn’t scale well. Kolibri supports PostgreSQL, but it doesn’t support the connection over SSL (as of release 0.14.3).
-	Expose the container endpoint over a public domain could be challenging.  
-	Managing keys and secrets also need some level of cloud expertise.

This project contains two [ARM templates] to deploy Kolibri on Azure cloud. It also contains a sample dockerfile to build the docker image. This image can be used as a container image for [Azure webapp]. Details on the image can be found in [dockerhub].


## Simple test deployment

A simple deployment can be achieved through test_deployment_template.json ARM template. It deploys a single container and binds it with a azurewebsites.net subdomain using an [Azure webapp]. But it will persist data inside the container. Step by step details can be found in this blog post.

This is not an ideal solution as updating the container will purge the data. So, a [volume mount] must be attached with this container. Also, SQLite might not scale well. So, in a cloud environment, it will be more justifiable to use PostgreSQL. If PostgreSQL is being used, only /data/content folder needs to be mapped with the external volume mount. 

## Production deployment

prod_deployment_template.json ARM template will deploy all necessary infrastructures for Kolibri and user will have an up and running Kolibri instance in Azure after deployment. 



[Kolibri]: <https://learningequality.org/kolibri/>
[learning management system (LMS)]: <https://en.wikipedia.org/wiki/Learning_management_system>
[Raspberry Pi Zero]: <https://www.raspberrypi.org/products/raspberry-pi-zero/>
[ARM templates]: <https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview>
[Azure webapp]: <https://azure.microsoft.com/en-in/services/app-service/containers/>
[dockerhub]: <https://hub.docker.com/r/sanmoy/kolibri-alpine>
[volume mount]: <https://docs.microsoft.com/en-us/azure/storage/files/storage-files-introduction>
[AKS]: <https://azure.microsoft.com/en-in/services/kubernetes-service/>
