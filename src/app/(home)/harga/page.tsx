'use client';

import React, { useState, useEffect } from "react";
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
import { SubscribeType } from "@/types/subscribe-types";
import Link from "next/link";
import { useCreatePaymentMutation } from "@/store/features/payment/payment";
import { formPaymentScheme } from "@/types/payment-types";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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

const methodPayments = [
  { name: "BCA", value: "BCA" },
  { name: "BJB", value: "BJB" },
  { name: "BNI", value: "BNI" },
  { name: "BRI", value: "BRI" },
  { name: "Mandiri", value: "MANDIRI" },
  { name: "Permata", value: "PERMATA" },
];

const PricingPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { data: subscribeData } = useGetSubscribeQuery({});
  const [subscribe, setSubscribe] = useState<SubscribeType[] | null>(null);
  const [selectedSubscribe, setSelectedSubscribe] = useState<SubscribeType | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  useEffect(() => {
    if (subscribeData) {
      setSubscribe(subscribeData.data);
    }
  }, [subscribeData]);

  const [createPayment, createPaymentResult] = useCreatePaymentMutation();

  async function handlePayment() {
    if (!selectedSubscribe || !selectedPaymentMethod) {
      return;
    }

    try {
      let data = formPaymentScheme.parse({
        subscribe_type_id: Number(selectedSubscribe.id),
        currency: "IDR",
        payment_method: {
          type: "VIRTUAL_ACCOUNT",
          reusability: "ONE_TIME_USE",
          virtual_account: {
            channel_code: selectedPaymentMethod,
          },
        },
        metadata: {
          sku: "PAYMENTS-SUBSCRIBER",
        },
      });

      if (selectedSubscribe.id == 0) {
        throw new Error("Subscribe ID not found");
      }

      const res = await createPayment(data);

      if (!res.error) {
        router.push(`/order/${res.data.data.id}`);
      }
    } catch (error) {
      // console.error("Error handle payment:", error);
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

        <Dialog>
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
                          <DialogTrigger asChild>
                            <Button
                              size="lg"
                              className="px-6 md:px-12"
                              onClick={() => setSelectedSubscribe(item)}
                            >
                              <div>
                                <span className="capitalize block">
                                  {item.name}
                                </span>
                                <span className="block">
                                  Rp.{" "}
                                  {new Intl.NumberFormat("id-ID").format(
                                    item.price
                                  )}
                                </span>
                              </div>
                            </Button>
                          </DialogTrigger>
                        ) : (
                          <Link href="/login">
                            <Button size="lg" className="px-6 md:px-12">
                              <div>
                                <span className="capitalize block">
                                  {item.name}
                                </span>
                                <span className="block">
                                  Rp.{" "}
                                  {new Intl.NumberFormat("id-ID").format(
                                    item.price
                                  )}
                                </span>
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

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Pilih metode pembayaran</DialogTitle>
              <DialogDescription>
                Pilih metode pembayaran yang Anda inginkan
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Label>Metode Pembayaran</Label>
              <RadioGroup onValueChange={(value) => setSelectedPaymentMethod(value)}>
                {methodPayments.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id={`r${index}`} value={item.value} />
                      <Label htmlFor={`r${index}`}>{item.name}</Label>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handlePayment}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </main>
  );
};

export default PricingPage;