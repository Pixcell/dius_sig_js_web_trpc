import z from 'zod';
import { initTRPC } from '@trpc/server';
import { get, list, create, deleteProcedure } from '../todo';
import { TodoConstraint, TodosConstraint } from '../types';

const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

export const appRouter = router({
    get: publicProcedure
        .input(z.string())
        .output(TodoConstraint)
        .query(get),
    list: publicProcedure
        .output(TodosConstraint)
        .query(list),
    create: publicProcedure
        .input(z.object({ title: z.string().max(500), description: z.string().max(500) }))
        .mutation(create),
    delete: publicProcedure
        .input(z.object({ id: z.string() }))
        .mutation(deleteProcedure)
});

export type AppRouter = typeof appRouter;
export default AppRouter;