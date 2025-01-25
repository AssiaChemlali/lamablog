import express from "express";
import { cleckWebHook } from "../controlles/webHook.controller.js";
const router=express.Router()

router.post("/cleck",cleckWebHook)
export default router