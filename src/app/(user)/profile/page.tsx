'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import config from '@/lib/config';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

interface UserProfile {
  email: string;
  name: string;
  phone: string;
  // birthDate: string;
  gender: string;
}

const fetchProfile = async (token: string) => {
  const response = await axios.get(`${config.apiUrl}/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

const ProfilePage = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (session) {
      fetchProfile(session.user?.accessToken as string)
        .then((data) => setUser(data));
    }
  }, [session]);

  return (
    <div className="bg-surface min-h-screen flex flex-col items-center px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h3 className='text-2xl font-bold text-[#B3B3B3]'>Kelola Akun</h3>
        <hr className='my-3'/>
        <Card>
          <CardHeader>
            <div className='flex justify-between items-center  gap-6 mb-3'>
              <CardTitle className='text-2xl'>Profil</CardTitle>
              <Button>
                Ubah
              </Button>
            </div>
            <hr className='border-primary'/>
          </CardHeader>
          <CardContent>
            <div className='mb-3'>
              <h6 className='text-base mb-3'>Email</h6>
              <p className='text-[#B3B3B3]'>
                {user?.email ?? '-'}
              </p>
            </div>
            <div className='mb-3'>
              <h6 className='text-base mb-3'>Nama</h6>
              <p className='text-[#B3B3B3]'>
                {user?.name ?? '-'}
              </p>
            </div>
            <div className='mb-3'>
              <h6 className='text-base mb-3'>Nomor Handphone</h6>
              <p className='text-[#B3B3B3]'>
                {user?.phone ?? '-'}
              </p>
            </div>
            <div className='mb-3'>
              <h6 className='text-base mb-3'>Tanggal Lahir</h6>
              <p className='text-[#B3B3B3]'>
                05 - 10 - 1992
              </p>
            </div>
            <div className='mb-3'>
              <h6 className='text-base mb-3'>Jenis Kelamin</h6>
              <p className='text-[#B3B3B3]'>
                {user?.gender ?? '-'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;