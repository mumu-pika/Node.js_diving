# Server
* Database
* Authentication
* Input Validation
* Your business logic


# Node.js' Role
* Run Server
  * Create Server & Listening to Incoming Requests

* Business Logic
  * Handle Requests, Validate Input, Connect to Database

* Responses
  * Return Response (Rendered HTML, JSON, ...)


# REPL (Node.js的执行方式)
* Read --> Read User Input
* Eval --> Evaluate User Input
* Print --> Print Output(Result)
* Loop --> Wait for new Input

# How the Web Works
Client => Request => Server => Response => Client

# Program Lifecycle & EventLoop
* Node.js runs non-blocking JS code and uses an event-driven
  code("Event Loop") for running your logic.
* A Node program exits as soon as there is more work to do
* Note: The createServer() event never finish by default



