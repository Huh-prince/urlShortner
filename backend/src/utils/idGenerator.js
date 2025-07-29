import { nanoid } from "nanoid"

export const idGenerator = function (length) {
    return nanoid(length);
}