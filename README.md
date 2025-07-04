# FastAPI To-Do App

CRUD To-Do App on AWS using FastAPI and Python

- function deployed on AWS Lambda
- data saved on a serverless database DynamoDB

### Databse Schema

| task_id | user_id | created_time | content | is_done |
| ------- | ------- | ------------ | ------- | ------- |
| xxxx    | xxxxxxx | xx-xx-xx     | "xxxx"  | false   |


## To Do

1. Build cloud infrastructure using AWS CDK
2. Write Pyton FastAPI application and deploy
3. Write tests using pytest
4. Frontend ??

## Functionality

users can
   - create task
   - get task
   - lists tasks
   - update task
   - delete task 