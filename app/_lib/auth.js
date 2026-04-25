import NextAuth from "next-auth";
import { compareSync } from "bcrypt-ts";
import Credentials from "next-auth/providers/credentials";
import { supabase } from "./supabase";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credential",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const { data: user, error } = await supabase
          .from("guests")
          .select("*")
          .eq("email", credentials.email)
          .single();

        if (error || !user) {
          return null;
        }

        const passwordsMatch = compareSync(credentials.password, user.password);

        console.log("User found: ", user);

        if (passwordsMatch) {
          return { id: user.id, email: user.email };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }

      return session;
    },
    authorized({ auth }) {
      return !!auth;
    },
  },
});

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     }),
//   ],
//   //secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     authorized({ auth, request }) {
//       return !!auth?.user;
//     },

//     async signIn({ user, account, profile }) {
//       try {
//         const existingGuest = await getGuest(user.email);

//         if (!existingGuest) {
//           await createGuest({
//             email: user.email,
//             fullName: user.name,
//           });
//         }

//         return true;
//       } catch (error) {
//         return false;
//       }
//     },

//     async session({ session, user }) {
//       const guest = await getGuest(session.user.email);

//       console.log("guest:", guest);

//       session.user.guestId = guest.id;

//       return session;
//     },
//   },

//   pages: {
//     signIn: "/login",
//   },
// });
