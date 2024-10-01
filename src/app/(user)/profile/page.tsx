"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetUserProfileMutation } from "@/store/features/user/profile";
import { UserProfile } from "@/types/user-profile.type";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [getUserProfile, getUserProfileResult] = useGetUserProfileMutation();
  const { data: session } = useSession();
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (session) {
        try {
          const result = await getUserProfile(session.user?.id as string);
          setUser(result.data.data);
        } catch (err) {
          console.error("Error fetching profile:", err);
        }
      }
    };

    fetchUserProfile();
  }, [session, getUserProfile]);

  return (
    <div className="bg-surface min-h-screen flex flex-col items-center px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-2xl font-bold text-[#B3B3B3]">Kelola Akun</h3>
        <hr className="my-3" />
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center  gap-6 mb-3">
              <CardTitle className="text-2xl">Profil</CardTitle>
              <Link href="/profile/edit">
                <Button>Ubah</Button>
              </Link>
            </div>
            <hr className="border-primary" />
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <h6 className="text-base mb-3">Email</h6>
              <p className="text-philippine-silver">
                {user?.email ?? "-"}
              </p>
            </div>
            <div className="mb-3">
              <h6 className="text-base mb-3">Nama</h6>
              <p className="text-philippine-silver">
                {user?.name ?? "-"}
              </p>
            </div>
            <div className="mb-3">
              <h6 className="text-base mb-3">Nomor Handphone</h6>
              <p className="text-philippine-silver">
                {user?.phone_number ?? "-"}
              </p>
            </div>
            <div className="mb-3">
              <h6 className="text-base mb-3">Tanggal Lahir</h6>
              <p className="text-philippine-silver">
                {user?.birth_date ? new Date(user.birth_date).toLocaleDateString() : "-"}
              </p>
            </div>
            <div className="mb-3">
              <h6 className="text-base mb-3">Jenis Kelamin</h6>
              <p className="text-philippine-silver">
                {user?.gender ?? "-"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
