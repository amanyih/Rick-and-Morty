"use client"

import type React from "react"

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client"
import { useMemo } from "react"

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  const client = useMemo(() => {
    return new ApolloClient({
      link: new HttpLink({
        uri: "https://rickandmortyapi.com/graphql",
      }),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: "network-only",
        },
      },
    })
  }, [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
