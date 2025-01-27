import express from "express";
import { cleckWebHook } from "../controlles/webHook.controller.js";
import bodyParser from "body-parser";
const router=express.Router()

router.post(
  "/cleck",
  bodyParser.raw({ type: 'application/json' }),
  cleckWebHook);

export default router