'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

export default function PasswordPage() {
    const { data: session } = useSession();

    return (
        <div className="bg-surface min-h-screen flex flex-col items-center px-4 py-24">
            <div className="container mx-auto max-w-5xl">
            <h3 className='text-2xl font-bold text-philippine-silver'>Kata Sandi</h3>
            <hr className='my-3'/>
            <Card>
                <CardHeader>
                    <div className='flex justify-between items-center  gap-6 mb-3'>
                        <CardTitle className='text-2xl'>Buat Kata Sandi</CardTitle>
                        <Link href="/password/edit">
                            <Button>
                                Ubah
                            </Button>
                        </Link>
                    </div>
                    <hr className='border-primary'/>
                </CardHeader>
                <CardContent>
                    <p className='text-philippine-silver mb-3'>
                        Dengan membuat kata sandi, anda dapat melakukan login dengan menggunakan kata sandi ataupun dengan akun google dan facebook
                    </p>
                    <div className='mb-3'>
                        <h6 className='text-base mb-3'>Email</h6>
                        <p className='text-philippine-silver'>
                            {session?.user?.email ?? '-'}
                        </p>
                    </div>
                </CardContent>
            </Card>
            </div>
        </div>
      );
}
