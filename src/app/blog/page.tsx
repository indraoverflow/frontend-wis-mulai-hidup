import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiMagnifyingGlass } from "react-icons/hi2";

const BlogPosts = () => {
  return (
    <div className="bg-surface container mx-auto px-4 py-8">
      <h1 className="text-5xl text-center mb-8">BACA ARTIKEL TENTANG KAMI DISNI</h1>
      
      <div className="mb-8 relative w-full">
        <HiMagnifyingGlass className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10' />
        <Input 
          type="search" 
          placeholder="Masukkan Kata Kunci" 
          className="border-black"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="flex flex-col bg-transparent border-[#FFE9D0]">
            <CardHeader className='p-0'>
                <div className="bg-gray-200 h-48 mb-4"></div>
            </CardHeader>
            <CardContent className="flex-grow">
              <h2 className="font-semibold mb-1 text-[#FFE9D0]">Title</h2>
              <p className="text-sm text-black">Date</p>
              <hr className='border-black' />
            </CardContent>
            <CardFooter className='justify-end'>
              <Button variant="outline" className="rounded-2xl">Detail Artikel</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;