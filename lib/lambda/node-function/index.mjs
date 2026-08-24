export const handler = async () => {
  console.trace("Hello, this is a TRACE level message");
  console.debug("Hello, this is a DEBUG level message");
  console.log("Hello, this is a LOG level message");
  console.info("Hello, this is an INFO level message");
  console.warn("Hello, this is a WARN level message");
  console.error("Hello, this is an ERROR level message");

  process.stdout.write("Hello, this is a STDOUT message\n");
  process.stderr.write("Hello, this is a STDERR message\n");
};
