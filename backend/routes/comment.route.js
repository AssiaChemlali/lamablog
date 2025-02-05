import express from "express";
import { addComment,deleteComment,getPostComments } from "../controlles/comment.controller";
const router=express.Router()

router.get("/:postId",getPostComments)
router.post("/:postId",addComment)
router.get("/:id",deleteComment)
export default router