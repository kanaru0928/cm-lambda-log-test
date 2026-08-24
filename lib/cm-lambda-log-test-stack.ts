import * as cdk from "aws-cdk-lib/core";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CmLambdaLogTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, "NodeFuntionWithText", {
      runtime: lambda.Runtime.NODEJS_24_X,
      code: lambda.Code.fromAsset(`${__dirname}/lambda/node-function`),
      handler: "index.handler",
    });

    new lambda.Function(this, "NodeFuntionWithJSON", {
      runtime: lambda.Runtime.NODEJS_24_X,
      code: lambda.Code.fromAsset(`${__dirname}/lambda/node-function`),
      handler: "index.handler",
      loggingFormat: lambda.LoggingFormat.JSON,
    });

    new lambda.Function(this, "PythonFunctionWithText", {
      runtime: lambda.Runtime.PYTHON_3_14,
      code: lambda.Code.fromAsset(`${__dirname}/lambda/python-function`),
      handler: "main.handler",
    });

    new lambda.Function(this, "PythonFunctionWithJSON", {
      runtime: lambda.Runtime.PYTHON_3_14,
      code: lambda.Code.fromAsset(`${__dirname}/lambda/python-function`),
      handler: "main.handler",
      loggingFormat: lambda.LoggingFormat.JSON,
    });


  }
}
