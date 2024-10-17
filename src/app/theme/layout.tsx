import { cn } from "@/lib/utils/tailwind-util";
import { minervaModern } from "@/lib/fonts";
import { Suspense } from "react";
import Loading from "@/components/shared/Loading";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("", minervaModern.className)}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
