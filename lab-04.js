/*
    CIT 281 Lab 4
    Name: Melinda Chan
*/

// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax

fastify.get("/", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Hello from Lab 4!</h1>");
});

fastify.get("/name", (request, reply) => {
  const { first, last } = request.query; // request.query already has everything, but just specifically first, last by object destructuring
  // we are only getting the first and last properties from request.query
  const name = first && last ? `${first} ${last}` : "Guest"; // if first last is true (first and last are provided as query parameters) then return "first last"
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(`<h1>Hello, ${name}<h1>`);
});

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});

// if run code on 127.0.0.1:8080 and see error -> change to localhost:8080
