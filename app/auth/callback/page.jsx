"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveToken } from "../../../utils/auth";

const CallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");

    if (token) {
      saveToken(token);
      router.push("/dashboard"); // Redirect to a secure page
    } else {
      router.push("/auth/login"); // Redirect back to login on failure
    }
  }, [router]);

  return <p>Loading...</p>;
};

export default CallbackPage;
