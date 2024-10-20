import bcrypt from 'bcrypt'

export async function hashPassword(req, res, next) {
    try {
        const pass = await bcrypt.compare(req.body.password, '$2b$10$W1EdCPfFIJ6oYd3lYhw42eqlBpQe2XkVE9/NptoA.2Cjs7giNq7B6')
        console.log(pass)
        req.checkPass = {status: true}
    } catch (err) {
        console.log(err)
    } finally {
        next()
    }
}

export async function comparePassword(req, res, next) {
    try {
        const checkPass = await bcrypt.compare(req.body.password, '$2b$10$W1EdCPfFIJ6oYd3lYhw42eqlBpQe2XkVE9/NptoA.2Cjs7giNq7B6')
        console.log(checkPass)
        req.checkPass = {status: checkPass}
    } catch (err) {
        console.log(err)
        req.checkPass = {status: false}

    } finally {
        next()
    }
}