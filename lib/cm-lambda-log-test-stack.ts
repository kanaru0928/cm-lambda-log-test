import * as cdk from "aws-cdk-lib/core";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CmLambdaLogTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, "NodeFuntionWithLogs", {
      runtime: lambda.Runtime.NODEJS_24_X,
      code: lambda.Code.fromAsset(`${__dirname}/lambda/node-function`),
      handler: "index.handler",
    });
  }
}
