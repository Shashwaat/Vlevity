const express = require("express");
const { getAllProducts } = require("../controllers/productController"); // by using controller routes
const router = express.Router();
// taking routes from the productcontroller file
router.route("/products").get(getAllProducts);
module.exports = router

//routing mod