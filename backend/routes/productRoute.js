const express = require("express");
const { getAllProducts } = require("../controllers/productController"); // by using controller 
const router = express.Router();
// taking routes from the productcontroller 
router.route("/products").get(getAllProducts);
module.exports = router

//routing 