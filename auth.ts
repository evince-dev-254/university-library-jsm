import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"
import { db } from "./database/drizzle"
import { usersTable } from "./database/schema"
import type { User } from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        const rows = await db
          .select()
          .from(usersTable)
          .where(eq(usersTable.email, String(credentials.email)))
          .limit(1);

        const user = rows[0];
        if (!user) return null;

        const isPasswordValid = await bcrypt.compare(
          String(credentials.password),
          user.password,
        );
        if (!isPasswordValid) return null;

        return { id: String(user.id), name: user.fullName, email: user.email } as User;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
    error: "/sign-in",
    verifyRequest: "/sign-in",
    newUser: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const t = token as any
        t.id = String(user.id)
        t.name = user.name
        t.email = user.email
      }
      return token
    },
    async session({ session, token }) {
        if(session.user) {
            session.user.id = token.id as string;
            session.user.name = token.name as string;
            session.user.email = token.email as string;
        }
        return session;
    },
  },
})