"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils/tailwind-util";
import { useGetInvitationByUserIdQuery } from "@/store/features/invitation/wedding-reception-slice";
import { useGetPaymentInfoQuery, usePaymentGatewayQuery } from "@/store/features/payment/payment";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

export default function OrderPage({ params }: { params: { id: string } }) {
  const session = useSession();

  const { data: paymentData } = useGetPaymentInfoQuery(params.id, {
    skip: !session.data,
  });
  const [payment, setPayment] = useState<any>(null);

  console.log(paymentData);

  useEffect(() => {
    if (paymentData) {
      setPayment(paymentData.payment);
    }
  }, [paymentData]);

  const { data: paymentGatewayData, refetch: fetchPaymentGateway } = usePaymentGatewayQuery(payment?.payment_method_id, {
    skip: !payment,
  });

  async function handlePayment(payment: any) {
    try {
      if (payment) {
        const { data } = await fetchPaymentGateway();
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-surface flex flex-col items-center px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-2xl font-bold text-[#B3B3B3]">Order</h3>
        <hr className="my-3" />
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Order Detail</CardTitle>
            <hr className="border-primary" />
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <h6 className="text-base mb-3">Bank</h6>
              <p className="text-philippine-silver">
                {payment?.payment_bank ?? "-"}
              </p>
            </div>
            <div className="mb-3">
              <h6 className="text-base mb-3">Status Pembayaran</h6>
              <p className="text-philippine-silver">
                {payment?.status_payment ?? "-"}
              </p>
            </div>
            <div className="mb-3">
              <h6 className="text-base mb-3">Total Pembayaran</h6>
              <p className="text-philippine-silver">
                {payment?.payment_amount ? "Rp. " + new Intl.NumberFormat('id-ID').format(payment.payment_amount) : "-"}
              </p>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button className="text-center" onClick={() => handlePayment(payment)}>
              Lanjutkan Pembayaran
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
