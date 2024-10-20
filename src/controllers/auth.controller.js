export async function login(req, res, next) {
    const hashPass = '$2b$10$W1EdCPfFIJ6oYd3lYhw42eqlBpQe2XkVE9/NptoA.2Cjs7giNq7B6'
    try {
        const body = await req.body
        req.data = {auth: req.checkPass.status};
    } catch (err){
        console.log(err)
        req.data = {auth: false};
    } finally {
        next()
    }
}

export async function register (req, res, next) {
    try{
        const body = await req.body
        req.data = {auth: true};
    } catch (err) {
        console.log(err)
        req.data = {auth: false};
    } finally {
        next()
    }
}