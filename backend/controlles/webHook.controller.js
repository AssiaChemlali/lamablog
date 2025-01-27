
import User from '../models/user.model.js'
export const cleckWebHook=async (req,res)=>{
  const WEBHOOK_SECRET=process.env.CLERK_WEBHOOK_SECRET
   
  if(!WEBHOOK_SECRET){
    throw new Error("webhook secret needed")
  }
  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
      evt = wh.verify(payload, headers);
  } catch (err) {
      res.status(400).json({
        message:"webhook verification failed"
      });
  }

  // console.log(evt.data)
  if (evt.type === 'user.created') {
    const newUser=new User({
      cleckUserId:evt.data.id,
      username:evt.data.username || evt.data.email_addresses[0],
      email:evt.data.email_addresses[0],
      img:evt.profile_img_url
    })
    await newUser.save()
  }
  return res.status(200).json({
    message:"webhook is receite"
  })

}