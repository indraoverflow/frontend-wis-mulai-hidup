import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <h1 className="text-7xl font-bold text-blue-400">Mulai Hidup</h1>
      <p className="text-3xl font-semibold">Wedding Invitation Service</p>
      <div className="flex gap-4">
        <Link href="/register">
          <Button variant="outline" size="lg">
            Buat Akun
          </Button>
        </Link>
        <Link href="/login">
          <Button size="lg">Masuk</Button>
        </Link>
      </div>
    </main>
  );
}
