## GraphQL

Cons:
- Lots of boilerplate and code gen necessary
- Hard to guarantee type safety (without running) in your queries since they are written as strings

Pros:
- Self documented API
- Can create partial queries (only request the data you need)

## gRPC

Cons:
- Hard to debug
- Lots of code generation required

Pros:
- Can talk to any protobuf server

## tRPC

Cons:
- Collocation of client and server code

Pros:
- Typesafety
- Very little boiler plate