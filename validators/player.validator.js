import { z } from 'zod';

export const PlayerSchema = z.object({
    username: z.string()
               .min(3)
               .max(50)
               .trim(),
    firstname: z.string()
                .min(1)
                .max(50)
                .trim()
                .optional(),
    lastname: z.string()
               .min(1)
               .max(50)
               .trim()
               .optional(),
    email: z.string()
            .max(50)
            .email(),
    birthdate: z.string()
                .date()
}).required();