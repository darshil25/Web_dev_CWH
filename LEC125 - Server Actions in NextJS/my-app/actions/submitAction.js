"use server"
import fs from "fs/promises"

export const submitAcrion = async (e) => {
  console.log(e.get("name"), e.get("email"))
  let a = await fs.writeFile("testfile.txt", `Name is ${e.get("name")} aur uska email is ${e.get("email")}`)
  console.log(a)
}