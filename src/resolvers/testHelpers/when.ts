import * as td from "testdouble";

export function when<T>(response: Promise<T>): { thenResolve: (response: T) => void } {
    return {
        thenResolve: resolveTo => td.when(response).thenResolve(resolveTo)
    };
}
