
import Comment from "../models/comment.model.js"

export const getPostComments=async(req,req)=>{
  const comments=await Comment.find({post:req.params.postId})
  .populate("user","username img")
  .sort({createdAt:-1})
  resizeBy.json(comments)
}

export const addComment=async(req,req)=>{
  
}

export const deleteComment=async(req,req)=>{
  
}