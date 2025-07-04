# FastAPI To-Do App with AWS Lambda & DynamoDB

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [SetUp](#setup)
4. [Project Structure](#project-structure)

## Overview

This project is backend of a to-do list app written in Python and FastAPI.
The app provides a RESTful API for basic CRUD operations.

It is hosted on serverless AWS infrastructure.
Function is deployed on AWS Lambda and data is saved on serverless DynamoDB database.


## Features
- Create, Read, Update, and Delete to-do items
- Serverless architecture
- FastAPI for high-performance APIs
- DynamoDB for cost-effective, scalable storage


## Setup

#### Prerequsites
- Git
- Python
- [AWS CLI](https://aws.amazon.com/cli/) configured
- [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html) installed

#### Steps
Clone the repo
```
git clone https://github.com/khadija-ahmadova/fastapi-to-do-app.git
cd fastapi-to-do-app
```

Set up a virtual environment
```
python -m venv venv
source venv/bin/activate
```
Install dependencies
```
pip install -r requirements.txt
```
If you have never used CDK with your account before run
```
cdk bootstrap
```
Go to `todo-infra` folder and run
```
cdk deploy
```
To interact with the API using auto-generated FastAPI documentation, do to `{APIUrl}/docs`

## Project Structure

The `/api` folder contains Python and FastAPI code.

The `/todo-infra` contains the CDK code to deploy Lambda function and DynamoDB table to AWS account.

The `/test` folder contains PyTest integration tests to test endpoints