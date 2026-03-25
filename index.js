exports.handler = async () => {
    console.log("handler")
  return {
    statusCode: 200,
    body: "Hello from Lambda 🚀"
  }
}