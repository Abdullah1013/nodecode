const express=require("express");
import {authUser} from '../controllers/usercontroller';
const {authUser}= require("../controllers/usercontroller");
const router=express.Router();

router.post('/auth',authUser)
module.exports=router;