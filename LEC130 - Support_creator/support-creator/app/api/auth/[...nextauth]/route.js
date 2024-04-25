import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github"
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';

export const authOptions = NextAuth({
  providers: [

    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if(account.provider === "github"){
        //connecting to mongoose
        const client = await mongoose.connect("mongodb://localhost:27017/support-creator")
        const currentUser = User.findOne({ email: email })
        //check if user is present in database
        if(!currentUser){
          //create new user
          const newUser = new User({
            email: email,
            username: email.split("@")[0],
          })
          await newUser.save()
          user.name = newUser.username
        }
        else{
          user.name = currentUser.username
        }
        return true;
      }
    }
  }
})

export { authOptions as GET, authOptions as POST }