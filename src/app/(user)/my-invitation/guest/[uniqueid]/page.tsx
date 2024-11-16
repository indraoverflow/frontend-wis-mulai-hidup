"use client";

import { Button, buttonVariants } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { GuestType } from '@/types/guest-types'
import React, { useEffect } from 'react'
import { useGetGuestByUniqueIdQuery } from '@/store/features/guest/guest-slice'
import Link from 'next/link';

export default function GuestPage({
    params,
}: {
    params: { uniqueid: string }
}) {
    const { data: guestsData, refetch } = useGetGuestByUniqueIdQuery(params.uniqueid);
    const guests = guestsData?.data;

    useEffect(() => {
        refetch();
    }, [refetch]);

    const handleCopyClick = (guest: any, i: number): void => {
        navigator.clipboard.writeText(guest.share_link);
        const button = document.getElementById(`copy-button-${i}`);
        if (button) {
            button.innerText = "Copied";
            setTimeout(() => {
                button.innerText = "Copy";
            }, 2000);
        }
    };

    const handleShareClick = (guest: any) => {
        const phoneNumber = guest.phone_number;
        const shareLink = guest.share_link;
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(shareLink)}`;
        window.open(waUrl, "_blank");
    };

    return (
        <div className="min-h-screen bg-surface md:py-24">
            <div className="flex flex-col items-center px-4 py-8">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex justify-between items-center  gap-6 mb-3">
                        <h3 className="text-2xl font-semibold text-philippine-silver">
                            Atur Tamu Undangan
                        </h3>
                        <Link
                            href={`/my-invitation/guest/${params.uniqueid}/create`}
                            className={buttonVariants({ size: "sm" })}
                        >
                            Tambah
                        </Link>
                    </div>
                    <hr className="my-3 border-primary" />
                </div>
            </div>
            <div className="bg-surface flex flex-col items-center px-4 md:py-8 mb-12">
                <div className="container mx-auto max-w-5xl">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-primary border-y">
                                <TableHead>
                                    No
                                </TableHead>
                                <TableHead>
                                    Nama
                                </TableHead>
                                <TableHead>
                                    No. Handphone
                                </TableHead>
                                <TableHead className="text-center">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {guests && guests.length > 0 ? (
                                guests.map((guest: GuestType, i: number) => (
                                    <TableRow className="border-primary" key={i}>
                                        <TableCell>
                                            {i + 1}
                                        </TableCell>
                                        <TableCell>
                                            {guest.name}
                                        </TableCell>
                                        <TableCell>
                                            {guest.phone_number}
                                        </TableCell>
                                        <TableCell className="flex justify-center items-center gap-2">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="px-6 md:px-12"
                                                onClick={() => handleCopyClick(guest, i)}
                                                id={`copy-button-${i}`}
                                            >
                                                Copy
                                            </Button>
                                            <Button 
                                                size="sm"
                                                className="px-6 md:px-12"
                                                onClick={() => handleShareClick(guest)}
                                            >
                                                Share
                                            </Button>
                                            <Link
                                                href={{
                                                    pathname: `/my-invitation/guest/${params.uniqueid}/edit/${guest.unique_id}`,
                                                    query: { guestData: JSON.stringify(guest) }
                                                }}
                                                className={buttonVariants({ variant: "tertiary", size: "sm" })}
                                            >
                                                Edit
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4}>
                                        <p className="text-center">Tidak ada data tamu</p>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
