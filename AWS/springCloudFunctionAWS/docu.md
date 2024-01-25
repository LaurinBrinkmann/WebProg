# Testing with Postman
## Create JAR-AWS File
cd AWS/springCloudFunctionAWS
mvn clean package
## Edit AWS Runtime
- check if Java 17
- org.springframework.cloud.function.adapter.aws.FunctionInvoker::handleRequest
## Make AWS Lambda Function public
1. under your selected lambda-function choose Configurations
2. go to Function-URL
3. create a new Function-URL
4. click on edit 
5. choose Auth type NONE
6. save
7. copy the Function-URL in this example<br>
   https://5nyhyk6l5bjuij4ja6w2zgvxdi0vjegt.lambda-url.eu-central-1.on.aws/

## Create Post Request
8. select POST and paste the Function-URL from Point 7. 
9. go under Body tab and select raw type in any string for example "hello"
10. click on send and be happy :)