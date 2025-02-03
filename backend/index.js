import express from "express"

import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import connectDB from './lib/connectDB.js'
import webHookRouter from './routes/webHoook.js'
import { clerkMiddleware, requireAuth } from '@clerk/express'
import cors from "cors"


const app =express()
app.use(cors(process.env.CLIENT_URL))
app.use( clerkMiddleware() )
app.use('/webhooks',webHookRouter)
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.get("/auth-state",(req,res)=>{
//   const authState=res.auth;
//   res.json(authState)
// })

// app.get("/protect",(req,res)=>{
//   const {userId}=res.auth;
//   if(!userId){
//     return res.status(401).json("not authentificated")
//   }
//   res.status(200).json("content")
// })

// app.get("/protect2",requireAuth(),(req,res)=>{
//   res.status(200).json("content")
// })

app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use('/comments',commentRouter)


app.use((error,req,res,next)=>{
  res.status(error.status|| 500)
  res.json({
    message:error.message || "something went wrong",
    status:error.status,
    stack:error.stack
  })
})

app.listen(3100,()=>{
  connectDB()
  console.log("server is runingg")

})

// if (!process.env.CLERK_PUBLISHABLE_KEY || !process.env.CLERK_SECRET_KEY) {
//   throw new Error('Clerk API keys are missing. Check your .env file.');
// }

// console.log('Publishable Key:', process.env.CLERK_PUBLISHABLE_KEY);
