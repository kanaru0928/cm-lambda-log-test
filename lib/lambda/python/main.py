import logging
import sys

initialLogger = logging.getLogger(__name__)
initialLogger.setLevel(logging.DEBUG)


def handler(event, context):
    logger = logging.getLogger(__name__)
    logger.setLevel(level=logging.DEBUG)

    logger.debug("Hello, this is a DEBUG level message")
    logger.info("Hello, this is an INFO level message")
    logger.warning("Hello, this is a WARN level message")
    logger.error("Hello, this is an ERROR level message")
    logger.critical("Hello, this is a CRITICAL level message")

    print("Hello, this is a STDOUT message")
    print("Hello, this is a STDERR message", file=sys.stderr)

    initialLogger.debug("Hello, this is a DEBUG level message from initialLogger")


if __name__ == "__main__":
    handler({}, {})
