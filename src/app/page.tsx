"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContextProvider } from "./context/user.context";


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);

  return (
    <UserContextProvider>
      <></>
    </UserContextProvider>
  );
}
