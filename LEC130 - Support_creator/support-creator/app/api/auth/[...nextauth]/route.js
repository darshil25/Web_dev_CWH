import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github"
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/conectDB';

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
      if (account.provider === "github") {
        await connectDB()
        
        const currentUser = await User.findOne({ email: email })
        
        //check if user is present in database
        if (!currentUser) {
          //create new user
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          })
        }
        return true;
      }
    },
    async session({session, user, token}){
      const dbUser = await User.findOne({email: session.user.email})
      session.user.name = dbUser.username;
      return session
    },
  }
})

export { authOptions as GET, authOptions as POST }