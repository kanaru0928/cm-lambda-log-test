require 'logger'

def handler(event:, context:)
    logger = Logger.new($stdout)
    logger.debug("Hello, this is a DEBUG level message.")
    logger.info("Hello, this is an INFO level message.")
    logger.warn("Hello, this is a WARN level message.")
    logger.error("Hello, this is an ERROR level message.")
    logger.fatal("Hello, this is a FATAL level message.")

    $stdout.puts("Hello, this is a message to STDOUT.")
    $stderr.puts("Hello, this is a message to STDERR.")
end
