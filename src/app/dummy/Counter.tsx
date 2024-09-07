"use client";
import { Button } from "@/components/ui/button";
import {
  decrement,
  increment,
  resetCounter,
} from "@/store/features/dummy/dummySlice";
import { RootState } from "@/store/store";
import { signOut } from "next-auth/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

export default function Counter({}: Props) {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col  gap-6 justify-center items-stretch">
      <p className="text-2xl text-center font-semibold">Counter</p>
      <div className="flex gap-6 justify-center items-center">
        <Button
          variant="outline"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <span className="font-bold text-2xl w-12 text-center">{count}</span>
        <Button
          variant="outline"
          aria-label="Decrement value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
      </div>
      <Button onClick={() => dispatch(resetCounter())}>Reset</Button>
      <Button onClick={() => signOut()}>Log Out</Button>
    </div>
  );
}
