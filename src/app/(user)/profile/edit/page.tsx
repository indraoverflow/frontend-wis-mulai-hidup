"use client";

import SubmitButton from '@/components/button/submit';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePicker } from '@/components/user/CreateForm/DatePicker';
import { useEditProfileMutation, useGetUserProfileQuery } from '@/store/features/user/profile';
import { EditProfileType, formUserProfileScheme, UserProfile } from '@/types/user-profile.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { RxCrossCircled } from 'react-icons/rx';


export default function EditProfilePage() {
    const { data: session } = useSession();
    const { data: userProfileData, error, isLoading } = useGetUserProfileQuery(session?.user?.id as string, {
        skip: !session,
    });

    const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const form = useForm({
        resolver: zodResolver(formUserProfileScheme),
        defaultValues: formUserProfileScheme.parse({}),
    });

    useEffect(() => {
        if (userProfileData) {
            const data = {
                email: userProfileData.data.email ?? "",
                name: userProfileData.data.name ?? "",
                phone_number: userProfileData.data.phone_number ?? "",
                birth_date: userProfileData.data.birth_date ?? null,
                gender: userProfileData.data.gender ?? ""
            };

            // set form value
            form.setValue("email", data.email);
            form.setValue("name", data.name);
            form.setValue("phone_number", data.phone_number);
            // form.setValue("birth_date", data.birth_date);
            form.setValue("gender", data.gender);
        } else if (error) {
            console.error("Error fetching profile:", error);
        }
    }, [userProfileData, error, form]);

    const [editProfile, editProfileResult] = useEditProfileMutation();

    async function onSubmit(values: EditProfileType) {
        try {
            let data = formUserProfileScheme.parse({
                email: values.email,
                name: values.name,
                phone_number: values.phone_number,
                // birth_date: values.birth_date,
                gender: values.gender,
            });

            if (!session?.user?.id) {
                throw new Error("User ID not found in session");
            }

            const res = await editProfile({ id: session.user.id, data });
            if(!res?.error){
                setAlert({ type: 'success', message: 'Profil berhasil diperbarui!' });
            }
        } catch (error) {
            setAlert({ type: 'error', message: 'Gagal memperbarui profil. Silakan coba lagi.' });
        }
    }

    return (
        <div className="bg-surface min-h-screen flex flex-col items-center px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <h3 className="text-2xl font-bold text-[#B3B3B3]">Kelola Akun</h3>
                <hr className="my-3" />
                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-center  gap-6 mb-3">
                            <CardTitle className="text-2xl">Profil</CardTitle>
                        </div>
                        <hr className="border-primary" />
                    </CardHeader>
                    <CardContent>
                        {alert && (
                            <Alert variant={alert.type === 'success' ? 'primary' : 'destructive'} className="mb-6 flex justify-between items-center">
                                <AlertDescription>
                                    <AlertTitle>{alert.type === 'success' ? 'Berhasil' : 'Gagal'}</AlertTitle>
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
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="mb-6">
                                            <FormLabel className="hidden md:block">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    className="bg-white placeholder:text-philippine-silver"
                                                    placeholder="Email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="mb-6">
                                            <FormLabel className="hidden md:block">Nama</FormLabel>
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
                                            <FormLabel className="hidden md:block">Nomor Handphone</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    className="bg-white placeholder:text-philippine-silver"
                                                    placeholder="Nomor Handphone"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* <FormField
                                    control={form.control}
                                    name="birth_date"
                                    render={({ field }) => (
                                        <FormItem className="mb-6">
                                            <FormLabel className="hidden md:block">Tanggal Lahir</FormLabel>
                                            <DatePicker field={field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                /> */}
                                <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => (
                                        <FormItem className="mb-6">
                                            <FormLabel className="hidden md:block">Jenis Kelamin</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full bg-white justify-between ">
                                                        <SelectValue
                                                            placeholder="Jenis Kelamin"
                                                        />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="male">Laki-Laki</SelectItem>
                                                            <SelectItem value="female">Perempuan</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
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
    )
}
