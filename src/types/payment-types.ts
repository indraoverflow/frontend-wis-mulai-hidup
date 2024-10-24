import { z } from "zod";

export interface PaymentType {
    subscribe_type_id: number;
    currency: string;
    payment_method: {
        type: string;
        reusability: string;
        virtual_account: {
            channel_code: string;
        }
    };
    metadata: {
        sku: string;
    }
}

export const formPaymentScheme = z.object({
    subscribe_type_id: z.number().default(0),
    currency: z.string().default("IDR"),
    payment_method: z.object({
        type: z.string().default(""),
        reusability: z.string().default(""),
        virtual_account: z.object({
            channel_code: z.string().default(""),
        }),
    }),
    metadata: z.object({
        sku: z.string().default(""),
    }),
});