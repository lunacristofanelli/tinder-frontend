import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

var jwt = require("jsonwebtoken");

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                const body = {
                    email: credentials.email,
                    password: credentials.password,
                };
                const response = await axios.post("http://localhost:8081/login", body );
                const token = response.data.accessToken;
                if (!token) throw new Error('No user found')
                const user = jwt.decode(token);

                return {
                    role: user.role,
                    email: user.email,
                    token: token
                }
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.email = token.email;
                session.user.role = token.role;
                session.user.token = token.token;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
                token.role = user.role;
                token.token = user.token;
            }
            return token;
        },
    },
    pages: {
        signIn: "/form",
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
