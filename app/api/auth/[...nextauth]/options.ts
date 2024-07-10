import type {NextAuthOptions} from 'next-auth'
import GITHUB from 'next-auth/providers/github'
import CredentialProviders from 'next-auth/providers/credentials'

export const options : NextAuthOptions = {
    providers: [
        GithubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialProviders({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Username"
                },
            },
            async authorize(credentials) {
                
            }
        })
    ],
}