import React from "react";
import Counter from "./Counter";
import User from "./User";

type Props = {};

/**
 * This is a Next.js page component.
 *
 * This component is used for testing the redux implementation
 * It's a dummy page
 * change the file name from _page.tsx to page.tsx to show the root in dev
 * don't forget to rename the file abck to _page.tsx before commit
 *
 * @returns The page component.
 */
export default function Page({}: Props) {
  return (
    <div className="flex min-h-screen flex-col gap-8 items-center justify-center w-full">
      <Counter />
      <User />
    </div>
  );
}
