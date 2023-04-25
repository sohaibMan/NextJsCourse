import {ApolloServer} from "@apollo/server";
import {startServerAndCreateNextHandler} from "@as-integrations/next";
import path from "node:path";
import {loadSchemaSync} from "@graphql-tools/load";
import {GraphQLFileLoader} from "@graphql-tools/graphql-file-loader";
import {ProjectResolvers} from "../../../resolvers/Projects";
import {ProposalResolvers} from "../../../resolvers/Proposals";
import {getToken} from "next-auth/jwt";
import {ServerContext} from "../../../types/server-context";
import {constraintDirectiveTypeDefs} from "graphql-constraint-directive";
import {ContractResolvers} from "../../../resolvers/Contract";
import {UserRole} from "../../../types/resolvers";
import {createApollo4QueryValidationPlugin} from "graphql-constraint-directive/apollo4";
import depthLimit from 'graphql-depth-limit'

// path to this folders
const rootPath = path.join(__dirname, "../../../../", "pages/api/graphql");
//path to schema from this folder
const schemaPath = path.join(rootPath, "/schema/*.graphql");

// load schema
let schema = loadSchemaSync(schemaPath, {
    loaders: [new GraphQLFileLoader()],
});


const plugins = [
    createApollo4QueryValidationPlugin({
        schema
    })
]


// create apollo server instance
const server = new ApolloServer<ServerContext>({
    typeDefs: [constraintDirectiveTypeDefs, schema],
    resolvers: [ProjectResolvers, ProposalResolvers, ContractResolvers],
    plugins,
    validationRules:[depthLimit(4)]
});

export default startServerAndCreateNextHandler(server,
    {
        context: async (req, _) => {
            const secret = process.env.NEXTAUTH_SECRET;
            //
            const token = await getToken({req, secret});

            // the users that sign with a provider (google or facebook ) will have a session with this info
            if (!token || !token.sub) return {user: null}

            // console.log(token.userRole)
            if (token && token.isCompleted === false) {
                // res.redirect(300, "/api/auth/createProfile")
                throw new Error("Please complete your profile")
            }
            //
            return {user: {id: token.sub, userRole: token.userRole as UserRole}}


        },
    });
