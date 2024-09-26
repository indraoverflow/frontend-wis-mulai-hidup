import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
    icon: string
    title: string
    href?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, href }) => {
    return (
        <Link href={href || '#'}>
            <Card className="w-full h-full">
                <CardHeader className="items-center">
                    <Image
                        src={icon}
                        alt={title}
                        width={60}
                        height={60}
                    />
                </CardHeader>
                <CardContent className="text-center px-0 md:p-6 md:pt-0">
                    <p className="text-sm">
                        {title}
                    </p>
                </CardContent>
            </Card>
        </Link>
    )
}

export default MenuItem;
