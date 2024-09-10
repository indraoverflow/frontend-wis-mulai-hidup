import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import "../../styles/globals.css";
import { Button } from "@/components/ui/button";

export default function page() {
    return (
        <div className="bg-surface min-h-screen flex flex-col items-center p-8 text-[#242424]">
            <div className="text-center mb-10 md:4/5 lg:w-2/3">
                <h1 className="uppercase text-5xl mb-3">
                    Kami Mengerti Kebutuhan Anda
                </h1>
                <p className="text-2xl">
                    Mulai hidup menyediakan beragam fitur yang dapat Anda pakai sesuai dengan kebutuhan. Rencanakan pernikahan Anda dengan lebih smart dan hadirkan momen pernikahan yang unik kepada tamu Anda.
                </p>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="align-top text-2xl">
                            Paket
                        </TableHead>
                        <TableHead className="align-top text-2xl text-center max-w-60">
                            Basic
                        </TableHead>
                        <TableHead className="align-top text-2xl text-center max-w-60">
                            Premium
                            <br />
                            <span className="text-base">
                                Undangan Tanpa Batas
                            </span>
                        </TableHead>
                        <TableHead className="align-top text-2xl text-center max-w-60">
                            Check in System
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Countdown Timer
                        </TableCell>
                        <TableCell className="text-center">
                            V
                        </TableCell>
                        <TableCell className="text-center">
                            V
                        </TableCell>
                        <TableCell className="text-center">
                            
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Foto Cover
                        </TableCell>
                        <TableCell className="text-center">
                            V
                        </TableCell>
                        <TableCell className="text-center">
                            V
                        </TableCell>
                        <TableCell className="text-center">
                            
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Detail Acara
                        </TableCell>
                        <TableCell className="text-center">
                            V
                        </TableCell>
                        <TableCell className="text-center">
                            V
                        </TableCell>
                        <TableCell className="text-center">
                            
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            
                        </TableCell>
                        <TableCell className="text-center">
                            <Button className="w-3/5">
                                Buat Undangan
                            </Button>
                        </TableCell>
                        <TableCell className="text-center">
                            <Button className="w-3/5">
                                Buat Undangan
                            </Button>
                        </TableCell>
                        <TableCell className="text-center">
                            <Button variant="outline" className="w-3/5">
                                Contact Us
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}