"use client"
import { queryClient } from "@/libs/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";


export const QueryProvider=({children}:{children:ReactNode})=> {
    return (
        <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    )
  }