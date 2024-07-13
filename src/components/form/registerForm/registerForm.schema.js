import { z } from "zod";

export const registerFormSchema = z.object(
    {
        name: z.string().min(5, "O nome precisa ser preenchido"),
        email: z.string().email("Forneça um email válido").min(5, "O e-mail precisa ser preenchido"),
        password: z.string().min(8, "É necessário no minímo 6 caracteres")
            .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minuscula")
            .regex(/[A-Z]+/, "É necessário ter pelo menos uma letra maiuscula")
            .regex(/[0-9]+/, "É necessário ter pelo menos um número")
            .regex(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/|]+/, "É necessário ao menos um caractere especial, exemplo: '@, %, $ etc..' "),
        againPassword: z.string().min(8, "É necessário no minímo 6 caracteres")
            .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minuscula")
            .regex(/[A-Z]+/, "É necessário ter pelo menos uma letra maiuscula")
            .regex(/[0-9]+/, "É necessário ter pelo menos um número")
            .regex(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/|]+/, "É necessário ao menos um caractere especial, exemplo: '@, %, $ etc..' "),
    }
).refine(({ password, againPassword }) => password === againPassword, {
    message: "As senhas não correspondem.",
    path: ["againPassword"],
});