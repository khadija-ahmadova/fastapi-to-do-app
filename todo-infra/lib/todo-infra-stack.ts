import * as cdk from 'aws-cdk-lib';
import * as ddb from "aws-cdk-lib/aws-dynamodb"
import * as lambda from "aws-cdk-lib/aws-lambda"
import { Construct } from 'constructs';

export class TodoInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // DDB table to store the tasks
    const table = new ddb.Table(this, "Tasks", {
      partitionKey: { name: "task_id", type: ddb.AttributeType.STRING },
      billingMode: ddb.BillingMode.PAY_PER_REQUEST,
      timeToLiveAttribute: "ttl",
    });

    // global secondary index based on user_id
    table.addGlobalSecondaryIndex({
      indexName: "user-index",
      partitionKey: { name: "user_id", type: ddb.AttributeType.STRING },
      sortKey: { name: "created_time", type: ddb.AttributeType.NUMBER },
    });

    // create lambda function
    const api = new lambda.Function(this, "API", {
      runtime: lambda.Runtime.PYTHON_3_10,
      code: lambda.Code.fromAsset("../api/lambda_function.zip"),
      handler: "todo.handler",
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    // url to access the function
    const functionUrl = api.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: {
        allowedOrigins: ["*"],
        allowedMethods: [lambda.HttpMethod.ALL],
        allowedHeaders: ["*"],
      },
    });

    // output the api function url
    new cdk.CfnOutput(this, "APIUrl", {
      value: functionUrl.url,
    });

    // give lambda permission to read/write to the table
    table.grantReadWriteData(api);

  }
}
