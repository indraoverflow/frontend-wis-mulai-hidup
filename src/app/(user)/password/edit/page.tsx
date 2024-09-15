'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import axiosInstance from '@/lib/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { z } from 'zod';

const formPasswordSchema = z.object({
    password: z
        .string()
        .min(6, 'Kata sandi minimal 6 karakter'),
});

export default function EditPasswordPage() {
    const form = useForm({
        resolver: zodResolver(formPasswordSchema),
        defaultValues: {
            password: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formPasswordSchema>) {
        try {
            const response = await axiosInstance.post('/auth/changepassword', {
                password: values.password,
            });

            if (response.status === 200) {
                alert('Kata sandi berhasil diubah');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-surface min-h-screen flex flex-col items-center px-4 py-24">
            <div className="container mx-auto max-w-5xl">
            <h3 className='text-2xl font-bold text-[#B3B3B3]'>Kata Sandi</h3>
            <hr className='my-3'/>
            <Card>
                <CardHeader>
                    <CardTitle className='text-2xl'>Edit Kata Sandi</CardTitle>
                    <hr className='border-primary'/>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => (
                                    <FormItem className='mb-6'>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='password'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type='submit' className='w-full' disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? (
                                    <>
                                        <FaSpinner className="w-4 h-4 mr-2 animate-spin" /> Loading...
                                    </>
                                ) : (
                                    'Simpan'
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            </div>
        </div>
      );
}
