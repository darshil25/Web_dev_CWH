'use server'

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/conectDB"
import User from "@/models/User"
import Username from "@/app/[username]/page"

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB()
  var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RPAY_KEY_ID,
    key_secret: process.env.RPAY_KEY_SECRET
  })

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  }

  let x = await instance.orders.create(options)

  //creating payment obj which show pending payment in db
  await Payment.create({
    oid: x.id,
    amount: amount,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message
  })

  return x;
}

export const fetchuser = async (username) => {
  await connectDB()
  let u = await User.findOne({ username: username })
  let user = u.toObject({ flattenObjectIds: true })
  return user
}

export const fetchpayments = async (username) => {
  await connectDB()

  //find all payments by sorting to decreasing amount & flatten object ids
  let p = await Payment.find({ to_user: username }).sort({ amount: -1 }).lean()
  return p
}

export const updateProfile = async (data, oldusername) => {
  await connectDB()
  let ndata = Object.fromEntries(data)
  //check username is available or not and only then update it
  if (oldusername !== ndata.username) {
    let u = await User.findOne({ username: ndata.username })
    if (u) {
      return { error: "Username already exists" }
    }
  }
  await User.updateOne({email: ndata.email}, ndata)
  // let user = u.toObject({flattenObjectIds: true})
}