import * as cdk from "aws-cdk-lib/core";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CmLambdaLogTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, "NodeFuntionWithText", {
      runtime: lambda.Runtime.NODEJS_24_X,
      code: lambda.Code.fromAsset(`${__dirname}/lambda/node`),
      handler: "index.handler",
    });

    new lambda.Function(this, "NodeFuntionWithJSON", {
      runtime: lambda.Runtime.NODEJS_24_X,
      code: lambda.Code.fromAsset(`${__dirname}/lambda/node`),
      handler: "index.handler",
      loggingFormat: lambda.LoggingFormat.JSON,
    });

    new lambda.Function(this, "PythonFunctionWithText", {
      runtime: lambda.Runtime.PYTHON_3_14,
      code: lambda.Code.fromAsset(`${__dirname}/lambda/python`),
      handler: "main.handler",
    });

    new lambda.Function(this, "PythonFunctionWithJSON", {
      runtime: lambda.Runtime.PYTHON_3_14,
      code: lambda.Code.fromAsset(`${__dirname}/lambda/python`),
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

    const dotnetFunctionCode = lambda.Code.fromAsset(`${__dirname}/lambda/dotnet`, {
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
    });

    new lambda.Function(this, "DotnetFunctionWithText", {
      runtime: lambda.Runtime.DOTNET_10,
      code: dotnetFunctionCode,
      handler: "dotnet-function::dotnet_function.Function::FunctionHandler",
    });

    new lambda.Function(this, "DotnetFunctionWithJSON", {
      runtime: lambda.Runtime.DOTNET_10,
      code: dotnetFunctionCode,
      handler: "dotnet-function::dotnet_function.Function::FunctionHandler",
      loggingFormat: lambda.LoggingFormat.JSON,
    });

    const javaFunctionCode = lambda.Code.fromAsset(`${__dirname}/lambda/java`, {
      bundling: {
        image: lambda.Runtime.JAVA_25.bundlingImage,
        command: [
          "/bin/sh",
          "-c",
          "mvn -q -DskipTests clean package && cp target/function.jar /asset-output/function.jar",
        ],
      },
    });

    new lambda.Function(this, "JavaFunctionWithText", {
      runtime: lambda.Runtime.JAVA_25,
      code: javaFunctionCode,
      handler: "com.example.function.Handler::handleRequest",
    });

    new lambda.Function(this, "JavaFunctionWithJSON", {
      runtime: lambda.Runtime.JAVA_25,
      code: javaFunctionCode,
      handler: "com.example.function.Handler::handleRequest",
      loggingFormat: lambda.LoggingFormat.JSON,
    });

    const rustFunctionCode = lambda.Code.fromAsset(`${__dirname}/lambda/rust`, {
      bundling: {
        image: cdk.DockerImage.fromRegistry("ghcr.io/cargo-lambda/cargo-lambda:latest"),
        environment: {
          CARGO_HOME: "/asset-input/.cargo",
        },
        command: [
          "sh",
          "-c",
          "cargo lambda build --release --x86-64 && cp target/lambda/bootstrap/bootstrap /asset-output/bootstrap",
        ],
      },
    });

    new lambda.Function(this, "RustFunctionWithText", {
      runtime: lambda.Runtime.PROVIDED_AL2023,
      code: rustFunctionCode,
      handler: "bootstrap",
      environment: {
        RUST_LOG: "bootstrap=trace",
      },
    });

    new lambda.Function(this, "RustFunctionWithJSON", {
      runtime: lambda.Runtime.PROVIDED_AL2023,
      code: rustFunctionCode,
      handler: "bootstrap",
      environment: {
        RUST_LOG: "bootstrap=trace",
      },
      loggingFormat: lambda.LoggingFormat.JSON,
    });
  }
}
