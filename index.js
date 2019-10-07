const server = require("./server.js");

const accountsRouter = require("./accounts/accounts-router");

server.use("/accounts", accountsRouter);

const PORT = process.env.PORT || 4100;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
