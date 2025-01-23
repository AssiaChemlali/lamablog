import express from "express";
const router=express.Router()

router.get("/usertest",(req,res)=>{
  res.status(200).send("comment route")
})
export default router