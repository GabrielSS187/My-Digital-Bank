import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/signIn',
    signOut: '/signIn',
    error: '/signIn'
  },
  callbacks: {
    authorized({ auth }) {
      const isAuthenticated = !!auth?.user;

      return isAuthenticated;
    },
    jwt({ token }) {
      return {
        ...token,
        jwt: '3743974397437542385545345'
      };
    },
    session({ session, token }) {
      return {
        ...session,
        user: {
          name: token.name,
          email: token.email,
          jwt: token.jwt
        }
      };
    }
  },
  providers: []
} satisfies NextAuthConfig;
