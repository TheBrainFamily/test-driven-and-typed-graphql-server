import {makeExecutableSchema, IResolvers} from "graphql-tools";
import {importSchema} from "graphql-import";
import * as lodash from "lodash";
import {resolvers} from "../index";
import * as td from "testdouble";
import {Context} from "../../types";
import ApolloClient from "apollo-client";
import {SchemaLink} from "apollo-link-schema-with-stack";
import {InMemoryCache} from "apollo-cache-inmemory";

export const getGqlClientWithMockedContext = () => {
    const schema = makeExecutableSchema({
        typeDefs: importSchema(`${__dirname}/../../schema.graphql`),
        // @ts-ignore
        resolvers: lodash.merge({}, resolvers)
    });

    const context = td.object<Context>();
    return {
        gqlClient: new ApolloClient({
            link: new SchemaLink({
                schema,
                context
            }),
            cache: new InMemoryCache()
        }),
        context
    };
};
