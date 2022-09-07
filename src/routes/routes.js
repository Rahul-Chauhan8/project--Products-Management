const express=require("express")
const router=express.Router()
const userController=require("../controllers/userController")
const productController = require('../controllers/productController')
const cartController  = require('../controllers/cartController')
const orderController = require('../controllers/orderController')


const {authentication,authorization} = require('../middlewares/auth')

/*------------------------------------------API's for userController-------------------------------------------*/

router.post("/register", userController.createUser)

router.post("/login" , userController.loginuser)
router.get("/user/:userId/profile",authentication,authorization, userController.getUser)

router.put("/user/:userId/profile", authentication,authorization,  userController.updateUser)
/*------------------------------------------API's for productController-------------------------------------------*/
router.post("/products", productController.createProduct)
router.get("/products" , productController.getProducts)
router.get("/products/:productId" , productController.getByProductId)
router.put("/products/:productId" , productController.updateProduct)
router.delete("/products/:productId" , productController.deleteProduct)

/*------------------------------------------API's for cartController-------------------------------------------*/
router.post("/users/:userId/cart",authentication,authorization, cartController.createCart)
router.put("/users/:userId/cart" ,authentication,authorization, cartController.updateCart)
router.get("/users/:userId/cart" ,authentication,authorization, cartController.getCartById)
router.delete("/users/:userId/cart" ,authentication,authorization, cartController.DeleteCartById)

/*------------------------------------------API's for orderController-------------------------------------------*/
router.post("/users/:userId/orders",authentication,authorization, orderController.createOrder)
router.put("/users/:userId/orders",authentication,authorization, orderController.updateOrder)



router.all("/**", function (req,res){
    res.status(404).send({status:false, msg:" API you request is not available"})
})















module.exports=router

