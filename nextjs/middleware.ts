import {withAuth} from "next-auth/middleware";
import {UserRole} from "./types/resolvers";


export default withAuth({
    callbacks: {
        authorized({req, token}) {


            if (token && token.isCompleted === false && req.nextUrl.pathname !== "/register") {
                // the user is not authorized to access the website if he didn't complete his profile,
                // so we redirect him to the register page
                return false;
            }
            if (token && token.isCompleted === false && req.nextUrl.pathname === "/register") {
                // the user is not authorized to access the website if he didn't complete his profile,
                // so we redirect him to the register page
                return true;
            }
            if (token && token.isCompleted === true && req.nextUrl.pathname === "/register") {
                // the user is not authorized to access the website if he didn't complete his profile,
                // so we redirect him to the register page
                return false;
            }


            if (req.nextUrl.pathname === "/find-work") {
                return token?.userRole === UserRole.Freelancer;
            }

            if (req.nextUrl.pathname === "/dashboard" || req.nextUrl.pathname === "/register") {
                return token?.userRole === UserRole.Client || token?.userRole === UserRole.Freelancer;
            }

            return !!token;
        },
    },
});


export const config = {
    matcher: ["/find-work", "/dashboard/", "/register"],
};

// export const runtime = 'nodejs';
