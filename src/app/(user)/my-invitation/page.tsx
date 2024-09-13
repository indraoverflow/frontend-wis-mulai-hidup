import { Button } from '@/components/ui/button';
import React from 'react'

export default function MyInvitationPage() {
    return (
        <div className="bg-surface flex flex-col items-center px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <div className='text-center'>
                    <Button className='mb-6' size='lg'>
                        Buat Undangan Digital
                    </Button>
                    <p>
                        Buat Undangan Digital Anda sekarang. Baik undangan pernikahan, undangan ulang tahun, atau undangan untuk kegiatan lain! Buat undangan yang memudahkan anda untuk berbagi informasi kepada tamu anda dan tentunya ramah lingkungan.
                    </p>
                </div>
            </div>
        </div>
      );
}
