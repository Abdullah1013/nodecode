// import express  from "express"

const authUser=(req,res)=>{
    res.status(200).json({message:'Auth user'})

}
// const router = express.Router();
// router.post('/api', authUser)

export default authUser