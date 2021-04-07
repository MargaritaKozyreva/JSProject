import { rest } from 'msw'
import {  getUserByLogin, isUserAutorized, users } from './userData'

export const handlers = [
    // Handles a POST /login request
    rest.get('http://kozyreva.api/auth/me', (req, res, ctx) => {
        // Persist user's authentication in the session

        const curUser = getUserByLogin("admin")
        if (curUser !== null) {
            return res(
                // Respond with a 200 status code
                ctx.json({
                    success: false,
                    data: null,
                }),
            )
        }
        return res(
            // Respond with a 200 status code
            ctx.json({
                success: true,
                data: curUser,
            }),
        )

    }),
    rest.get('http://kozyreva.api/profile/:userLogin', (req, res, ctx) => {
        // Persist user's authentication in the session
        const { userLogin } = req.params
        const curUser = getUserByLogin(userLogin)
        if (curUser === null) {
            return res(
                // Respond with a 200 status code
                ctx.json({
                    success: false,
                    data: null,
                }),
            )
        }
        return res(
            // Respond with a 200 status code
            ctx.json({
                success: true,
                data: curUser,
            }),
        )

    }),
    rest.post('http://kozyreva.api/login', (req: any, res, ctx) => {
        const { login, password } = req.body;
        if (isUserAutorized(login, password)) {
            return res(
                ctx.json({
                    success: true,
                    data: getUserByLogin(login),
                })
            )
        }

        return res(
            ctx.json({
                success: false,
                data: 'user is not autorized',
            })
        )

    }),

    // Handles a GET /users request
    rest.get('http://kozyreva.api/users', (req, res, ctx) => {
        // Persist user's authentication in the session
        sessionStorage.setItem('is-authenticated', 'true')

        return res(
            ctx.json(users)
            // Respond with a 200 status code

        )
    }),
    // Handles a GET /user request
    rest.get('http://kozyreva.api/user/:userId', (req, res, ctx) => {
        const { userId } = req.params
        return res(
            ctx.json(getUserByLogin(userId)),
        )
    }),
]
