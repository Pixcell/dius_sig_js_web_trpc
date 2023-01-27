"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProcedure = exports.create = exports.list = exports.get = void 0;
const server_1 = require("@trpc/server");
const uuid_1 = require("uuid");
let todos = [];
const get = ({ input }) => {
    const found = todos.find((todo => todo.id === input));
    if (!found) {
        throw new server_1.TRPCError({
            code: 'BAD_REQUEST',
            message: `could not find todo item with id ${input}`,
        });
    }
    return found;
};
exports.get = get;
const list = () => {
    return todos;
};
exports.list = list;
const create = ({ input }) => {
    const newItem = { id: (0, uuid_1.v1)(), title: input.title, description: input.description };
    todos.push(newItem);
    return newItem;
};
exports.create = create;
const deleteProcedure = ({ input }) => {
    todos = todos.filter(item => item.id !== input.id);
    return "success";
};
exports.deleteProcedure = deleteProcedure;
