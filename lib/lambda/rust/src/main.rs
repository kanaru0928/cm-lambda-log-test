use lambda_runtime::{run, service_fn, tracing, Error, LambdaEvent};
use serde_json::Value;

async fn function_handler(_event: LambdaEvent<Value>) -> Result<String, Error> {
    tracing::trace!("Hello, this is a TRACE level message");
    tracing::debug!("Hello, this is a DEBUG level message");
    tracing::info!("Hello, this is an INFO level message");
    tracing::warn!("Hello, this is a WARN level message");
    tracing::error!("Hello, this is an ERROR level message");

    println!("Hello, this is a STDOUT message");
    eprintln!("Hello, this is a STDERR message");

    Ok("Success".to_string())
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    tracing::init_default_subscriber();

    run(service_fn(function_handler)).await
}
