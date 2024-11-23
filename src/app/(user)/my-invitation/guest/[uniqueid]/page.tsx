"use client";

import { Button, buttonVariants } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { GuestType, formCreateGuestScheme } from '@/types/guest-types';
import React, { useEffect, useState } from 'react';
import { useGetGuestByUniqueIdQuery, useAddGuestMutation, useUpdateGuestMutation } from '@/store/features/guest/guest-slice';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import SubmitButton from '@/components/button/submit';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RxCrossCircled } from 'react-icons/rx';

export default function GuestPage({ params }: { params: { uniqueid: string } }) {
    const { data: guestsData, refetch } = useGetGuestByUniqueIdQuery(params.uniqueid);
    const guests = guestsData?.data;
    const [addGuest] = useAddGuestMutation();
    const [updateGuest] = useUpdateGuestMutation();
    const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentGuest, setCurrentGuest] = useState<GuestType | null>(null);

    const form = useForm({
        resolver: zodResolver(formCreateGuestScheme),
        defaultValues: formCreateGuestScheme.parse({}),
    });

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

    const handleAddGuestClick = () => {
        setIsEditMode(false);
        setCurrentGuest(null);
        form.reset();
        setIsDialogOpen(true);
    };

    const handleEditGuestClick = (guest: GuestType) => {
        setIsEditMode(true);
        setCurrentGuest(guest);
        form.reset(guest);
        setIsDialogOpen(true);
    };

    async function onSubmit(values: GuestType) {
        try {
            let data: { wedding_unique_id: string; name: string; phone_number: string; unique_id?: string } = formCreateGuestScheme.parse({
                name: values.name,
                phone_number: values.phone_number,
                wedding_unique_id: params.uniqueid,
            });

            if (isEditMode && currentGuest) {
                data = { ...data, unique_id: currentGuest.unique_id };
                const res = await updateGuest(data);
                if (!res?.error) {
                    setAlert({ type: "success", message: "Tamu berhasil diperbarui." });
                }
            } else {
                const res = await addGuest(data);
                if (!res?.error) {
                    form.reset();
                    setAlert({ type: "success", message: "Tamu berhasil ditambahkan." });
                }
            }

            setIsDialogOpen(false);
            refetch();
        } catch (error) {
            setAlert({
                type: "error",
                message: "Gagal memperbarui tamu. Silakan coba lagi.",
            });
        }
    }

    return (
        <div className="min-h-screen bg-surface md:py-24">
            <div className="flex flex-col items-center px-4 py-8">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex justify-between items-center gap-6 mb-3">
                        <h3 className="text-2xl font-semibold text-philippine-silver">Atur Tamu Undangan</h3>
                        <Button onClick={handleAddGuestClick} className={buttonVariants({ size: "sm" })}>Tambah</Button>
                    </div>
                    <hr className="my-3 border-primary" />
                </div>
            </div>
            <div className="bg-surface flex flex-col items-center px-4 md:py-2 mb-12">
                <div className="container mx-auto max-w-5xl">
                    {alert && (
                        <Alert variant={alert.type === "success" ? "primary" : "destructive"} className="mb-6 flex justify-between items-center">
                            <AlertDescription>
                                <AlertTitle>{alert.type === "success" ? "Berhasil" : "Gagal"}</AlertTitle>
                                {alert.message}
                            </AlertDescription>
                            <span onClick={() => setAlert(null)} className="cursor-pointer">
                                <RxCrossCircled className="h-5 w-5" />
                            </span>
                        </Alert>
                    )}
                    <Table>
                        <TableHeader>
                            <TableRow className="border-primary border-y">
                                <TableHead>No</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>No. Handphone</TableHead>
                                <TableHead className="text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {guests && guests.length > 0 ? (
                                guests.map((guest: GuestType, i: number) => (
                                    <TableRow className="border-primary" key={i}>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{guest.name}</TableCell>
                                        <TableCell>{guest.phone_number}</TableCell>
                                        <TableCell className="flex justify-center items-center gap-2">
                                            <Button size="sm" variant="outline" className="px-6 md:px-12" onClick={() => handleCopyClick(guest, i)} id={`copy-button-${i}`}>Copy</Button>
                                            <Button size="sm" className="px-6 md:px-12" onClick={() => handleShareClick(guest)}>Share</Button>
                                            <Button size="sm" variant="tertiary" className="px-6 md:px-12" onClick={() => handleEditGuestClick(guest)}>Edit</Button>
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

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{isEditMode ? "Edit Tamu" : "Tambah Tamu"}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem className="mb-6">
                                        <FormLabel>Nama</FormLabel>
                                        <FormControl>
                                            <Input type="text" className="bg-white placeholder:text-philippine-silver" placeholder="Nama" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="phone_number" render={({ field }) => (
                                    <FormItem className="mb-6">
                                        <FormLabel>No. Handphone</FormLabel>
                                        <FormControl>
                                            <Input type="text" className="bg-white placeholder:text-philippine-silver" placeholder="No. Handphone" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <div className="text-center">
                                    <SubmitButton isSubmitting={form.formState.isSubmitting} />
                                </div>
                            </form>
                        </Form>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    );
}