"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import axiosInstance from "@/lib/axios/axios";
import config from "@/lib/config";
import { useGetPaymentStatusQuery } from "@/store/features/payment/payment";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function OrderStatusPage({ params }: { params: { id: string } }) {
  const session = useSession();

  const { data: paymentData } = useGetPaymentStatusQuery(params.id, {
    skip: !session.data,
  });
  const [payment, setPayment] = useState<any>(null);

  useEffect(() => {
    if (paymentData) {
      setPayment(paymentData.payment);
    }
  }, [paymentData]);

  return (
    <div className="bg-surface flex flex-col items-center px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-2xl font-bold text-[#B3B3B3]">Order</h3>
        <hr className="my-3" />
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Order Status</CardTitle>
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
              <h6 className="text-base mb-3">Virtual Account</h6>
              <p className="text-philippine-silver">
                {payment?.virtual_account ?? "-"}
              </p>
            </div>
            <div className="mb-3">
              <h6 className="text-base mb-3">Tanggal Pembayaran</h6>
              <p className="text-philippine-silver">
                {payment?.payment_date ? new Date(payment.payment_date).toLocaleString() : "-"}
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
        </Card>
      </div>
    </div>
  );
}
