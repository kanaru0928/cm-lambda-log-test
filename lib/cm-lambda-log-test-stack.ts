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

    new lambda.Function(this, "RubyFunctionWithText", {
      runtime: lambda.Runtime.RUBY_4_0,
      code: lambda.Code.fromAsset(`${__dirname}/lambda/ruby`),
      handler: "main.handler",
    });

    new lambda.Function(this, "RubyFunctionWithJSON", {
      runtime: lambda.Runtime.RUBY_4_0,
      code: lambda.Code.fromAsset(`${__dirname}/lambda/ruby`),
      handler: "main.handler",
      loggingFormat: lambda.LoggingFormat.JSON,
    });

    const dotnetFunctionCode = lambda.Code.fromAsset(
      `${__dirname}/lambda/dotnet-function`,
      {
        bundling: {
          image: lambda.Runtime.DOTNET_10.bundlingImage,
          command: [
            "dotnet",
            "publish",
            "-c",
            "Release",
            "-r",
            "linux-x64",
            "--self-contained",
            "false",
            "-o",
            "/asset-output",
          ],
        },
      },
    );

    new lambda.Function(this, "DotnetFunctionWithText", {
      runtime: lambda.Runtime.DOTNET_10,
      code: dotnetFunctionCode,
      handler: "dotnet_function::dotnet_function.Function::FunctionHandler",
    });

    new lambda.Function(this, "DotnetFunctionWithJSON", {
      runtime: lambda.Runtime.DOTNET_10,
      code: dotnetFunctionCode,
      handler: "dotnet_function::dotnet_function.Function::FunctionHandler",
      loggingFormat: lambda.LoggingFormat.JSON,
    });
  }
}
