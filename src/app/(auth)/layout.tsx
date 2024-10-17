import Loading from "@/components/shared/Loading";
import Image from "next/image";
import { Suspense } from "react";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center min-h-screen gap-8 p-5 bg-surface lg:px-24">
      <div className="flex items-center justify-center w-10/12 gap-20 max-w-screen-desktop lg:w-full">
        <Image
          src="/images/auth-hero.png"
          width={455}
          height={488}
          alt="islamic couple"
          className="hidden lg:block"
        />

        <div className="border border-secondary h-[488px] hidden lg:block"></div>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </section>
  );
}
