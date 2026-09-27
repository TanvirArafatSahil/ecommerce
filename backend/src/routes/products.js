import {Router} from "express";
import Product from "../models/Product.js";

const router = Router();

router.get("/", async(req,res)=>{
  res.json(await Product.find());
});

router.post("/", async(req,res)=>{
  const product = await Product.create(req.body);
  res.json(product);
});

export default router;