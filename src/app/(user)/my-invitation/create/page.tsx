import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

export default function CreateInvitationPage() {
    return (
        <div className="min-h-screen bg-surface py-24">
            <div className="flex flex-col items-center px-4 py-8">
                <div className="container mx-auto max-w-5xl">
                    <h3 className='text-2xl font-semibold text-philippine-silver'>Buat undangan</h3>
                    <hr className='my-3 border-primary'/>
                </div>
            </div>
            <div className="bg-white flex flex-col items-center px-4 py-8 mb-12">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex gap-4 md:gap-6 lg:gap-16">
                        <Card className="w-32">
                            <CardHeader className="items-center">
                                <Image
                                    src="/images/icon/idea-theme.svg"
                                    alt="Cost and Time"
                                    width={60}
                                    height={60}
                                />
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-sm">
                                    Pilih Tema
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="w-32">
                            <CardHeader className="items-center">
                                <Image
                                    src="/images/icon/couple-2.svg"
                                    alt="Cost and Time"
                                    width={60}
                                    height={60}
                                />
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-sm">
                                    Informasi Mempelai
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="w-32">
                            <CardHeader className="items-center">
                                <Image
                                    src="/images/icon/calendar-time-and-date.svg"
                                    alt="Cost and Time"
                                    width={60}
                                    height={60}
                                />
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-sm">
                                    Jadwal dan Lokasi Pernikahan
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="bg-white flex flex-col items-center px-4 py-8">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {[0, 1, 2, 3].map((i) => (
                            <Card className="border-0 shadow-none" key={i}>
                                <CardContent className="p-3 border rounded-md">
                                    <Image
                                        src="/template-placeholder.png"
                                        alt="template"
                                        width={262}
                                        height={370}
                                    />
                                </CardContent>
                                <CardFooter className="flex justify-center items-center gap-1 py-6">
                                    <Button size="sm">
                                        Pilih Tema
                                    </Button>
                                    <Button size="sm" variant="ghost" className="text-primary">
                                        Preview
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      );
}
