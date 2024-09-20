import { cn } from "@/lib/utils";
import { minervaModern } from "@/lib/fonts";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("", minervaModern.className)}>
      {children}
    </div>
  );
}
