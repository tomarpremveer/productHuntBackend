const router = require("express").Router();
const productControllers = require("./controllers/ProductControllers");
const userControllers = require("./controllers/UserControllers");
router.get("/", productControllers.index);
router.post("/create", productControllers.create);
router.delete("/delete/:id", productControllers.delete);
router.post("/upvote",productControllers.upvote)
/*User Controllers */
router.post("/login", userControllers.logIn);
module.exports = router;
