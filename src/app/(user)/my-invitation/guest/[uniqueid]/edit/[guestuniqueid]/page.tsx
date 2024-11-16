"use client";

import { buttonVariants } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formGuestScheme, GuestType } from '@/types/guest-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react'
import { useUpdateGuestMutation } from '@/store/features/guest/guest-slice'
import Link from 'next/link';
import SubmitButton from '@/components/button/submit';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RxCrossCircled } from 'react-icons/rx';
import { Switch } from '@/components/ui/switch';
import { useSearchParams, useRouter } from 'next/navigation';

export default function EditGuestPage({
    params,
}: {
    params: { uniqueid: string, guestuniqueid: string }
}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const guestData = searchParams.get('guestData');

    useEffect(() => {
        if (!guestData) {
            router.push(`/my-invitation/guest/${params.uniqueid}`);
        }
    }, [guestData, params.uniqueid, router]);

    const [alert, setAlert] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    const form = useForm({
        resolver: zodResolver(formGuestScheme),
        defaultValues: formGuestScheme.parse({}),
    });

    useEffect(() => {
        if (guestData) {
            const guest = JSON.parse(guestData as string);

            form.setValue("name", guest.name);
            form.setValue("phone_number", guest.phone_number);
            form.setValue("status", guest.status);
        }
    }, [guestData, form]);

    const [editGuest, editGuestResult] = useUpdateGuestMutation();

    async function onSubmit(values: GuestType) {
        try {
            let data = formGuestScheme.parse({
                name: values.name,
                phone_number: values.phone_number,
                status: values.status ? 'YES' : 'NO',
                wedding_unique_id: params.uniqueid,
                unique_id: params.guestuniqueid,
            });

            console.log(data);

            const res = await editGuest(data);

            if (!res?.error) {                
                setAlert({ type: "success", message: "Tamu berhasil diperbarui." });
            }
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
                    <div className="flex justify-between items-center  gap-6 mb-3">
                        <h3 className="text-2xl font-semibold text-philippine-silver">
                            Kelola Tamu Undangan
                        </h3>
                        <Link
                            href={`/my-invitation/guest/${params.uniqueid}`}
                            className={buttonVariants({ variant: "outline", size: "sm" })}
                        >
                            Kembali
                        </Link>
                    </div>
                    <hr className="my-3 border-primary" />
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center  gap-6 mb-3">
                                <CardTitle className="text-2xl">
                                    Edit Tamu
                                </CardTitle>
                            </div>
                            <hr className="border-primary" />
                        </CardHeader>
                        <CardContent>
                            {alert && (
                                <Alert
                                    variant={alert.type === "success" ? "primary" : "destructive"}
                                    className="mb-6 flex justify-between items-center"
                                >
                                    <AlertDescription>
                                        <AlertTitle>
                                            {alert.type === "success" ? "Berhasil" : "Gagal"}
                                        </AlertTitle>
                                        {alert.message}
                                    </AlertDescription>
                                    <span onClick={() => setAlert(null)} className="cursor-pointer">
                                        <RxCrossCircled className="h-5 w-5" />
                                    </span>
                                </Alert>
                            )}
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="mb-6">
                                                <FormLabel>Nama</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        className="bg-white placeholder:text-philippine-silver"
                                                        placeholder="Nama"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone_number"
                                        render={({ field }) => (
                                            <FormItem className="mb-6">
                                                <FormLabel>No. Handphone</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        className="bg-white placeholder:text-philippine-silver"
                                                        placeholder="No. Handphone"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem className="grid grid-cols-1">
                                                <FormLabel className="">Status</FormLabel>                                                
                                                <FormControl>
                                                    <Switch
                                                        checked={field.value === 'YES'}
                                                        onCheckedChange={(checked) => field.onChange(checked ? 'YES' : 'NO')}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="text-center">
                                        <SubmitButton isSubmitting={form.formState.isSubmitting} />
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
