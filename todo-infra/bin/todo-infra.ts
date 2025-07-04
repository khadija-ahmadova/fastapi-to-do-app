#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TodoInfraStack } from '../lib/todo-infra-stack';

const app = new cdk.App();
new TodoInfraStack(app, 'TodoInfraStack', {
});