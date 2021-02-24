import { rest } from 'msw'
import { getUserById, users } from './userData'

export const handlers = [
    // Handles a POST /login request
    rest.post('http://kozyreva.api/login', (req, res, ctx) => {
        // Persist user's authentication in the session
        sessionStorage.setItem('is-authenticated', 'true')

        return res(
            // Respond with a 200 status code
            ctx.status(200),
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
            ctx.json(getUserById(users, userId)),
        )
    }),
]
