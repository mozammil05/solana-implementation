#/bin/bash!
aws ecr get-login-password --region us-east-1 | sudo docker login --username AWS --password-stdin 590183941726.dkr.ecr.us-east-1.amazonaws.com
sudo docker build -t frontend-user-service .
sudo docker tag frontend-user-service:latest 590183941726.dkr.ecr.us-east-1.amazonaws.com/frontend-user-service:latest
sudo docker push 590183941726.dkr.ecr.us-east-1.amazonaws.com/frontend-user-service:latest
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 590183941726.dkr.ecr.us-east-1.amazonaws.com