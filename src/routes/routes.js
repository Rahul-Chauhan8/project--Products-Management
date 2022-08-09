const express=require("express")
const router=express.Router()
const userController=require("../controllers/userController")


const {authentication,authorization} = require('../middlewares/auth')


router.post("/register", userController.createUser)

router.post("/login" , userController.loginuser)
router.get("/user/:userId/profile",authentication,authorization, userController.getUser)

router.put("/user/:userId/profile", authentication,authorization,  userController.updateUser)
//// -------------------------------product Api's---------------------------------------------//




router.all("/**", function (req,res){
    res.status(404).send({status:false, msg:" API you request is not available"})
})















module.exports=router

