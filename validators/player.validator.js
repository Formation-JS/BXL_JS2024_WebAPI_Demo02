import { z } from 'zod';

export const PlayerSchema = z.object({
    username: z.string()
               .min(3)
               .max(50),
    firstname: z.string()
                .min(1)
                .max(50)
                .optional(),
    lastname: z.string()
               .min(1)
               .max(50)
               .optional(),
    email: z.string()
            .max(50)
            .email(),
    birthdate: z.string()
                .date()
}).required();