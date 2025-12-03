# Wanderlust Deployment on Kubernetes

### In this project, we will learn about how to deploy wanderlust application on Kubernetes.

### Pre-requisites to implement this project:
-  Create 2 AWS EC2 instance (Ubuntu) with instance type t2.medium and root volume 29GB.
-  Setup <a href="https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/kubeadm.md"><u> Kubeadm </a></u>

#
## Steps for Kubernetes deployment:

1) Become root user :
```bash
sudo su
```

#
2) Clone code from remote repository (GitHub) :
```bash
https://github.com/Ashu-Git-3721/wanderlust.git
```

#
3) Verify nodes are in ready state or not :
```bash
kubectl get nodes
```

<img width="600" height="222" alt="Screenshot 2025-12-03 125907" src="https://github.com/user-attachments/assets/38505845-278f-4f21-b646-baf64de1cda6" />

#
4) Create kubernetes namespace :
```bash
kubectl create namespace wanderlust
```

<img width="800" height="226" alt="Screenshot 2025-12-03 131708" src="https://github.com/user-attachments/assets/7fed25f7-35d9-4332-9bc4-c7b55ca7afaa" />

#
5) Update kubernetes config context : 
```bash
kubectl config set-context --current --namespace wanderlust
```

<img width="800" height="229" alt="Screenshot 2025-12-03 131945" src="https://github.com/user-attachments/assets/a26cdd66-4cd7-4b6e-8911-b44242c029a0" />

#
6) Enable DNS resolution on kubernetes cluster :

- Check coredns pod in kube-system namespace and you will find <i> Both coredns pods are running on master node </i>

```bash
kubectl get pods -n kube-system -o wide | grep -i core
```

<img width="700" height="524" alt="Screenshot 2025-12-03 132552" src="https://github.com/user-attachments/assets/0e4c8d56-4394-479d-9f0a-37b274cba75e" />

- Above step will run coredns pod on worker node as well for DNS resolution

```bash
kubectl edit deploy coredns -n kube-system -o yaml
```
<i> Make replica count from 2 to 4 </i>

![replica 4](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/edit-coredns.png)

#
7) Navigate to frontend directory :
```bash
cd frontend
```

#
8) Edit .env.docker file and change the public IP Address with your worker node public IP :
```bash
vi .env.docker
```

<img width="500" height="58" alt="Screenshot 2025-12-03 133026" src="https://github.com/user-attachments/assets/4789d1cd-4cc5-468d-a4cb-40060c6ee93e" />


#
9) Build frontend docker image : 
```bash
docker build -t ashutosh3721/frontend-wanderlust:v2.1.8 .
```
![Dockerfile frontend](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/docker%20frontend%20build.png)

#
10) Navigate to backend directory :
```bash
cd ../backend/
```

#
11) Open .env.docker file and edit below variables : 

    - MONGODB_URI: \<your-mongodb-servicename>
    - REDIS_URL: \<your-redis-servicename>
    - FRONTEND_URL: \<your-workernode-publicIP>

> Note: To get service names, check <u>mongodb.yaml, redis.yaml</u>


<img width="600" height="590" alt="Screenshot 2025-12-03 131121" src="https://github.com/user-attachments/assets/50d05b53-6842-4486-b9c9-615c46996744" />

#
12) Build backend docker image : 
```bash
docker build -t ashutosh3721/backend-wanderlust:v2.1.8 .
```
![Backend dockerfile](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/docker%20backend%20build.png)

#
13) Check docker images:
```bash
docker images
```
![docker images](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/docker%20images.png)

#
14) Login to DockerHub and push image to DockerHub
```bash
docker login
```
![docker login](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/docker%20login.png)

```bash
docker push ashutosh3721/frontend-wanderlust:v2.1.8
docker push ashutosh3721/backend-wanderlust:v2.1.8
```

#
15) Once, Image is pushed to DockerHub, navigate to kubernetes directory
```bash
cd ../kubernetes
```

#
16) Apply manifests file the below order:

    - Create persistent volume :
    ```bash
    kubectl apply -f persistentVolume.yaml 
    ```
    ![Peristent volume](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/pv.png)

    - Create persistent volume Claim :
    ```bash
    kubectl apply -f persistentVolumeClaim.yaml 
    ```
    ![Peristent volume Claim](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/pvc.png)

    - Create MongoDB deployment and service :
    ```bash
    kubectl apply -f mongodb.yaml 
    ```
    ![MongoDb](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/mongo.png)

    - Create Redis deployment and service :
    > Note: Wait for 3-4 mins to get mongodb, redis pods and service should be up, otherwise backend-service will not connect.
    ```bash
    kubectl apply -f redis.yaml 
    ```
    ![Redis](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/redis.png)

    - Create Backend deployment and service :
    ```bash
    kubectl apply -f backend.yaml 
    ```
    ![Backend](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/backend.png)

    - Create Frontend deployment and service :
    ```bash
    kubectl apply -f frontend.yaml
    ```
    ![Frontend](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/frontend.png)

#
17)  Check all deployments and services :
```bash 
kubectl get all
```
![all deployments and services](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/all-deps.png)

18) Check logs for all the pods :
> Note: This is mandatory to ensure all pods and services are connected or not, if not then recreate deployments
```bash
kubectl logs <pod-name>
```

20) Navigate to chrome and access your application at 31000 port :
```bash
http://<your-workernode-publicip>:31000/
```
![App](https://github.com/DevMadhup/wanderlust/blob/devops/kubernetes/assets/app.png)

#

