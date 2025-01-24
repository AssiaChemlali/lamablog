import express from "express";
import { getPosts,getPost,createPost } from "../controlles/post.controller.js";
const router=express.Router()

router.get("/",getPosts)
router.get("/:slug",getPost)
router.post("/",createPost)
export default router