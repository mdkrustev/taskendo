import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "@/lib/prisma";

export const authOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session, token }: any) {

      if (token.sub) {
        const now = new Date();
        try {
          await prisma.user.upsert({
            where: {
              googleId: token.sub,
            },
            update: {
              name: session.user.name || undefined,
              email: session.user.email || undefined,
              updatedAt: now
            },
            create: {
              name: session.user.name || "",
              email: session.user.email || "",
              googleId: token.sub,
              createdAt: now,
              updatedAt: now
            },
          });
        } catch (error) {
          console.error("Error creating/updating user", error);
        }
      }

      return session;
    },
  },

};

const NextAuthHandler = NextAuth(authOptions);

// Обграждаме handler-а, за да достъпим req и res
const handler = (req: any, res: any) => {
  const currentPath = req.url;
  console.log("Current path:", currentPath);
  return NextAuthHandler(req, res);
};


export { handler as GET, handler as POST };