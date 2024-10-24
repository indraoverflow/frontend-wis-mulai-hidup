"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/tailwind-util";
import { minervaModern } from "@/lib/fonts";
import { FiCheck } from "react-icons/fi";
import { useSession } from "next-auth/react";
import { useGetSubscribeQuery } from "@/store/features/subscription/subscribe";
import { useEffect, useState } from "react";
import { SubscribeType } from "@/types/subscribe-types";
import Link from "next/link";
import { useCreatePaymentMutation } from "@/store/features/payment/payment";
import { formPaymentScheme } from "@/types/payment-types";
import { useRouter } from 'next/navigation';

const priceItems = [
  { items: "Durasi Berlangganan", basic: "1 bulan", premium: "2 bulan" },
  { items: "Countdown Timer", basic: true, premium: true },
  { items: "Foto Cover", basic: true, premium: true },
  { items: "Detail Jadwal Acara", basic: true, premium: true },
  { items: "Google Maps", basic: true, premium: true },
  { items: "Wedding Team", basic: true, premium: true },
  { items: "Registry", basic: true, premium: true },
  { items: "Wedding Story", basic: true, premium: true },
  { items: "Bridesmaid and Bestmen", basic: true, premium: true },
  { items: "Things to Do", basic: true, premium: true },
  { items: "QR Code Scanner", basic: true, premium: true },
  { items: "Virtual Gift", basic: true, premium: true },
  { items: "Virtual Check-In", basic: true, premium: true },
  { items: "Tablet & Printer", basic: true, premium: true },
  { items: "Musik Backsound", basic: false, premium: true },
  { items: "Galeri Foto", basic: false, premium: true },
  { items: "Wedding Video", basic: false, premium: true },
  { items: "Premium Template", basic: false, premium: true },
];

const PricingPage = () => {
  const router = useRouter();

  const { data: session } = useSession();
  const { data: subscribeData } = useGetSubscribeQuery({});
  const [subscribe, setSubscribe] = useState<SubscribeType[] | null>(null);

  useEffect(() => {
    if (subscribeData) {
      setSubscribe(subscribeData.data);
    }
  }, [subscribeData]);

  const [createPayment, createPaymentResult] = useCreatePaymentMutation();

  async function handlePayment(subscribe: SubscribeType) {
    try {
      let data = formPaymentScheme.parse({
        subscribe_type_id: Number(subscribe.id),
        currency: "IDR",
        payment_method: {
          type: "VIRTUAL_ACCOUNT",
          reusability: "ONE_TIME_USE",
          virtual_account: {
            channel_code: "BCA",
          }
        },
        metadata: {
          sku: "PAYMENTS-SUBSCRIBER"
        }
      });

      if (subscribe.id == 0) {
        throw new Error("Subscribe ID not found");
      }

      const res = await createPayment(data);

      if (!res.error) {
        router.push(`/order/${res.data.data.id}`);
      }
    } catch (error) {
      console.error("Error handle payment:", error);
    }
  }

  return (
    <main className="bg-surface min-h-screen flex flex-col items-center px-4 md:py-24">
      <section className="container flex flex-col gap-6 md:gap-12 mx-auto max-w-5xl">
        <div className="text-center mb:6 md:mb-16">
          <h1
            className={cn(
              "uppercase text-3xl lg:text-5xl text-center py-6 px-12",
              minervaModern.className
            )}
          >
            Kami Mengerti Kebutuhan Anda
          </h1>
          <p
            className={cn(
              "text-xl lg:text-2xl tracking-wide leading-tight text-center max-w-[1034px]  mb-4 lg:mt-0",
              minervaModern.className
            )}
          >
            Mulai hidup menyediakan beragam fitur yang dapat Anda pakai sesuai
            dengan kebutuhan. Rencanakan pernikahan Anda dengan lebih smart dan
            hadirkan momen pernikahan yang unik kepada tamu Anda.
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="align-top text-2xl">Paket</TableHead>
              <TableHead className="align-top text-2xl text-center">
                Basic
              </TableHead>
              <TableHead className="align-top text-2xl text-center">
                Premium
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {priceItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="pr-0 whitespace-nowrap">
                  {item.items}
                </TableCell>
                <TableCell className="text-center">
                  {item.basic === true ? (
                    <FiCheck className="md:w-6 md:h-5 mx-auto" />
                  ) : (
                    item.basic
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {item.premium === true ? (
                    <FiCheck className="md:w-6 md:h-5 mx-auto" />
                  ) : (
                    item.premium
                  )}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell></TableCell>
              {subscribe ? (
                <>
                  {subscribe.map((item: SubscribeType, index: number) => (
                    <TableCell key={index} className="py-6 text-center">
                      {session ? (
                        <Button 
                          size="lg" 
                          className="px-6 md:px-12"
                          onClick={() => handlePayment(item)}
                        >
                          <div>
                            <span className="capitalize block">{item.name}</span>
                            <span className="block">Rp. {new Intl.NumberFormat('id-ID').format(item.price)}</span>
                          </div>
                        </Button>
                      ) : (
                        <Link href="/login">
                          <Button size="lg" className="px-6 md:px-12">
                            <div>
                              <span className="capitalize block">{item.name}</span>
                              <span className="block">Rp. {new Intl.NumberFormat('id-ID').format(item.price)}</span>
                            </div>
                          </Button>
                        </Link>
                      )}
                    </TableCell>
                  ))}
                </>
              ) : (
                <>
                  <TableCell className="py-6 text-center">
                    <Button size="lg" className="px-6 md:px-12">
                      -
                    </Button>
                  </TableCell>
                  <TableCell className="py-6 text-center">
                    <Button size="lg" className="px-6 md:px-12">
                      -
                    </Button>
                  </TableCell>
                </>
              )}
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </main>
  );
}

export default PricingPage;