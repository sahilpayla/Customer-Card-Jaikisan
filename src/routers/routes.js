const express = require("express");
let router = express.Router();
let customerController = require("../controllers/customerController");
const cardController = require("../controllers/cardController")


router.post('/createCustomer',customerController.createCustomer) 
router.get("/getCustomer",customerController.getCustomerDetail) 
router.delete("/deleteCustomer/:customerId",customerController.deleteCustomer) 

router.post("/createCard",cardController.createCard)
router.get("/getCard",cardController.getCard)


module.exports = router;