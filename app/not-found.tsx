"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [countdown, setCountdown] = useState(3);
  const router = useRouter();

  useEffect(() => {
    if (countdown === 0) {
      router.push('/');
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);
  return (
    <div className="flex flex-col items-center mt-48">
      <h1 className="text-5xl font-bold text-custom-purple">404 - Not Found</h1>
      <p className="mt-4 text-2xl text-gray-700">This page could not be found.</p>
      <p className="mt-4 text-xl text-red-500">You will be redirected to the homepage in {countdown} seconds.</p>
    </div>
  );
}