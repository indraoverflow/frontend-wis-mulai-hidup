'use client';

import SubmitButton from '@/components/button/submit';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import MenuInvitation from '@/components/user/MenuInvitation/Menu'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod'

const formBrideScheme = z.object({
    mr: z.string(),
    mrName: z.string(),
    mrTitle: z.string(),
    mrProfile: z.string(),
    mrs: z.string(),
    mrsName: z.string(),
    mrsTitle: z.string(),
    mrsProfile: z.string(),
});

export default function BrideInformationPage() {
    const form = useForm({
        resolver: zodResolver(formBrideScheme),
        defaultValues: {
            mr: '',
            mrName: '',
            mrTitle: '',
            mrProfile: '',
            mrs: '',
            mrsName: '',
            mrsTitle: '',
            mrsProfile: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formBrideScheme>) {
        try {
            console.log(values);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-surface py-24">
            <div className="flex flex-col items-center px-4 py-8">
                <div className="container mx-auto max-w-5xl">
                    <h3 className='text-2xl font-semibold text-philippine-silver'>Buat undangan</h3>
                    <hr className='my-3 border-primary' />
                </div>
            </div>
            <div className="bg-white flex flex-col items-center px-4 py-8 mb-12">
                <div className="container mx-auto max-w-5xl">
                    <MenuInvitation />
                </div>
            </div>
            <div className="bg-white p-6">
                <div className="container mx-auto max-w-5xl">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name='mr'
                                    render={({ field }) => (
                                        <FormItem className='mb-6'>
                                            <FormLabel 
                                                className="hidden md:block"
                                            >
                                                Mr
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    className="bg-white"
                                                    placeholder="Mr"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="grow">
                                    <FormField
                                        control={form.control}
                                        name='mrName'
                                        render={({ field }) => (
                                            <FormItem className='mb-6'>
                                                <FormLabel 
                                                    className="hidden md:block"
                                                >
                                                    Nama Anda
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        className="bg-white"
                                                        placeholder="Nama Anda"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name='mrTitle'
                                    render={({ field }) => (
                                        <FormItem className='mb-6'>
                                            <FormLabel 
                                                className="hidden md:block"
                                            >
                                                Gelar
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    className="bg-white"
                                                    placeholder="Gelar Anda"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name='mrProfile'
                                render={({ field }) => (
                                    <FormItem className='mb-6'>
                                        <FormLabel
                                            className="hidden md:block"
                                        >
                                            Profil
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="bg-white"
                                                placeholder="Isi profil menarikmu"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <hr className="border-primary my-6"/>

                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name='mrs'
                                    render={({ field }) => (
                                        <FormItem className='mb-6'>
                                            <FormLabel 
                                                className="hidden md:block"
                                            >
                                                Mrs
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    className="bg-white"
                                                    placeholder="mrs"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="grow">
                                    <FormField
                                        control={form.control}
                                        name='mrsName'
                                        render={({ field }) => (
                                            <FormItem className='mb-6'>
                                                <FormLabel 
                                                    className="hidden md:block"
                                                >
                                                    Nama Pasangan
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        className="bg-white"
                                                        placeholder="Nama Pasangan"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name='mrsTitle'
                                    render={({ field }) => (
                                        <FormItem className='mb-6'>
                                            <FormLabel 
                                                className="hidden md:block"
                                            >
                                                Gelar
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    className="bg-white"
                                                    placeholder="Gelar Anda"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name='mrsProfile'
                                render={({ field }) => (
                                    <FormItem className='mb-6'>
                                        <FormLabel
                                            className="hidden md:block"
                                        >
                                            Profil
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="bg-white"
                                                placeholder="Isi profil menarikmu"
                                                {...field}
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
                </div>
            </div>
        </div>
    )
}
