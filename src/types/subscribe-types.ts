import { z } from "zod";

export interface SubscribeType {
    id?: number;
    name: string;
    price: number;
}

export const formSubscribeScheme = z.object({
    name: z.string().default(""),
    price: z.number().default(0),
});