import Post from "../models/post.model.js"
import User from "../models/user.model.js"
  export const getPosts=async(req,res)=>{
    const posts=await Post.find()
    res.status(200).json(posts)
  }

  export const getPost=async(req,res)=>{
    const post=await Post.findOne({slug:req.params.slug})
    res.status(200).json(post)
  }

  export const createPost=async(req,res)=>{

    const cleckUserId=req.auth.useId
    if(!cleckUserId){
      return res.status(401).json("not authenticated")
    }
    const user=await User.findOne({cleckUserId})

    if(!user){
      return res.status(404).json("User not found")
    }
    const newPost=new Post({user:user._id,...req.body}) 
    const post=await newPost.save()
    res.status(200).json(post)
  }

  export const deletePost=async(req,res)=>{
    const cleckUserId=req.auth.useId
    if(!cleckUserId){
      return res.status(401).json("not authenticated")
    }
    const user=await User.findOne({cleckUserId})

    const deletedPost=await Post.findByIdAndDelete({
      _id:req.params.id,
      user:user._id
    })
    if(!deletedPost){
      return res.status(403).json("you can delete only your posts")
    }
    res.status(200).json("post has been deleted")
  }