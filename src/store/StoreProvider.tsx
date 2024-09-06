"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";

/**
 * The StoreProvider component wraps the root of your app and makes the Redux store
 * available to all components in the component tree.
 *
 * It is a wrapper around the `react-redux` Provider component, but it also lazily
 * creates the store instance when the component is first rendered.
 *
 * @returns The StoreProvider component.
 *
 **/
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
