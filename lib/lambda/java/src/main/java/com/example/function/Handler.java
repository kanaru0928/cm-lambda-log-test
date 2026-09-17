package com.example.function;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.logging.LogLevel;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Handler implements RequestHandler<Object, String> {

    private static final Logger log4jLogger = LogManager.getLogger(Handler.class);

    @Override
    public String handleRequest(Object input, Context context) {
        LambdaLogger logger = context.getLogger();

        logger.log("Hello, this is a TRACE level message", LogLevel.TRACE);
        logger.log("Hello, this is a DEBUG level message", LogLevel.DEBUG);
        logger.log("Hello, this is an INFO level message", LogLevel.INFO);
        logger.log("Hello, this is a WARN level message", LogLevel.WARN);
        logger.log("Hello, this is an ERROR level message", LogLevel.ERROR);
        logger.log("Hello, this is a FATAL level message", LogLevel.FATAL);

        System.out.println("Hello, this is a STDOUT message");
        System.err.println("Hello, this is a STDERR message");

        log4jLogger.trace("Hello, this is a TRACE level message from Log4j2");
        log4jLogger.debug("Hello, this is a DEBUG level message from Log4j2");
        log4jLogger.info("Hello, this is an INFO level message from Log4j2");
        log4jLogger.warn("Hello, this is a WARN level message from Log4j2");
        log4jLogger.error("Hello, this is an ERROR level message from Log4j2");
        log4jLogger.fatal("Hello, this is a FATAL level message from Log4j2");

        return "Success";
    }
}
