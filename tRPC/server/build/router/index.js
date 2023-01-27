"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const zod_1 = __importDefault(require("zod"));
const server_1 = require("@trpc/server");
const todo_1 = require("../todo");
const types_1 = require("../types");
const t = server_1.initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;
exports.appRouter = router({
    get: publicProcedure
        .input(zod_1.default.string())
        .output(types_1.TodoConstraint)
        .query(todo_1.get),
    list: publicProcedure
        .output(types_1.TodosConstraint)
        .query(todo_1.list),
    create: publicProcedure
        .input(zod_1.default.object({ title: zod_1.default.string().max(500), description: zod_1.default.string().max(500) }))
        .mutation(todo_1.create),
    delete: publicProcedure
        .input(zod_1.default.object({ id: zod_1.default.string() }))
        .mutation(todo_1.deleteProcedure)
});
