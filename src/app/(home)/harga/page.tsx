import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { minervaModern } from "@/lib/fonts";
import { FiCheck } from "react-icons/fi";

export default function page() {
    const priceItems = [
        {items: "Countdown Timer", basic: true},
        {items: "Foto Cover", basic: true},
        {items: "Detail Jadwal Acara", basic: true},
        {items: "Google Maps", basic: true},
        {items: "Registry", basic: true},
        {items: "Wedding Team", basic: true},
        {items: "Premium Template", basic: true},
        {items: "Galeri Foto", basic: true},
        {items: "Wedding Story", basic: true},
        {items: "Wedding Video", basic: true},
        {items: "Bridesmaid and Bestmen", basic: true},
        {items: "Things to Do", basic: true},
        {items: "Wedding Wish", basic: true},
        {items: "QR Code Scanner", basic: true},
        {items: "Virtual Gift", basic: true},
        {items: "Virtual Check-In", basic: true},
        {items: "Tablet & Printer", basic: true},
    ];

    return (
        <div className="bg-surface min-h-screen flex flex-col items-center px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className={cn("uppercase text-5xl text-center mb-3", minervaModern.className)}>
                        Kami Mengerti Kebutuhan Anda
                    </h1>
                    <p className={cn("text-2xl", minervaModern.className)}>
                        Mulai hidup menyediakan beragam fitur yang dapat Anda pakai sesuai dengan kebutuhan. Rencanakan pernikahan Anda dengan lebih smart dan hadirkan momen pernikahan yang unik kepada tamu Anda.
                    </p>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="align-top text-2xl">
                                Paket
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {priceItems.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="w-1/2">
                                    {item.items}
                                </TableCell>
                                <TableCell className="text-left">
                                    {item.basic && (
                                        <FiCheck />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            {/* buat colpsan 2 dan letakan button di tengah */}
                            <TableCell colSpan={2} className="py-6">
                                <Button
                                    className="flex mx-auto px-16"
                                >
                                    Buat Undangan
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}