import mongoose from "mongoose";

const connectDB= async()=>{
  try {
    // await mongoose.connect(process.env.MONGO);
    const uri = process.env.MONGO || 'mongodb+srv://lamablog:lamablog@lamablogcluster.h36p7.mongodb.net/blog?retryWrites=true&w=majority';
await mongoose.connect(uri);
    console.log("mongo db is connected")
  } catch (error) {
    console.log(error)
    
  }
}
export default connectDB