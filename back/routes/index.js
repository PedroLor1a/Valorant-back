const { Router } = require("express");
const agentsRouter = require("./agentsRouter");

const router = Router();

router.use("/agents", agentsRouter);

module.exports = router;
