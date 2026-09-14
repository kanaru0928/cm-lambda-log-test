using Amazon.Lambda.Core;
using Microsoft.Extensions.Logging;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace dotnet_function;

public class Function
{

    /// <summary>
    /// A simple function that takes a string and does a ToUpper
    /// </summary>
    /// <param name="input">The event for the Lambda function handler to process.</param>
    /// <param name="context">The ILambdaContext that provides methods for logging and describing the Lambda environment.</param>
    /// <returns></returns>
    public string FunctionHandler(object input, ILambdaContext context)
    {
        context.Logger.LogTrace("Hello, this is a TRACE level message");
        context.Logger.LogDebug("Hello, this is a DEBUG level message");
        context.Logger.LogInformation("Hello, this is an INFO level message");
        context.Logger.LogWarning("Hello, this is a WARN level message");
        context.Logger.LogError("Hello, this is an ERROR level message");
        context.Logger.LogCritical("Hello, this is a CRITICAL level message");

        Console.WriteLine("Hello, this is a STDOUT message");
        Console.Error.WriteLine("Hello, this is a STDERR message");

        ILogger myLogger = LoggerFactory.Create(builder => builder.AddConsole()).CreateLogger("MyLogger");
        myLogger.LogInformation("Hello, this is a INFO level message from MyLogger");

        return "Success";
    }
}
