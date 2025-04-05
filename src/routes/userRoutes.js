const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizedRoles = require("../middlewares/roleMiddleware")
const router = express.Router();

//only admin can access this route
router.get("/admin", verifyToken, authorizedRoles("admin"), (req,res)=>{
    res.json({message: "Welcome admin"});
});

//both admin and manager can access this route
router.get("/manager", verifyToken, authorizedRoles("admin", "manager"), (req,res)=>{
    res.json({message: "Welcome manager"});
});
//all can access this route
router.get("/user", verifyToken, authorizedRoles("admin", "manager", "user"), (req,res)=>{
    res.json({message: "Welcome user"});
});
module.exports  = router;