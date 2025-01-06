// "use client";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";
// import { disableDraftMode } from "./actions"; // Ensure this import path is correct

// const emptySubscribe = () => () => {};

/**
 * AlertBanner component displays a banner at the top of the page.
 * It uses external state to determine visibility and transitions for pending actions.
 */
export default function AlertBanner() {
//   const router = useRouter();
//   const [isPending, startTransition] = useTransition();

//   const shouldShow = useSyncExternalStore(
//     emptySubscribe,
//     () => typeof window !== "undefined" && window.top === window, // Prevents window-related errors during SSR
//     () => false
//   );

  // if (!shouldShow) return null;

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur"
    >
      <div className="py-2 text-center text-sm">
        Blogs
      </div>
    </div>
  );
}
