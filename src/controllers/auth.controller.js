import { accountsCollection } from "../models/mongoClient.model.js";
import bcrypt from 'bcrypt'

export async function login(req, res, next) {
    const hashPass = '$2b$10$W1EdCPfFIJ6oYd3lYhw42eqlBpQe2XkVE9/NptoA.2Cjs7giNq7B6'
    try {
        const accountData = await accountsCollection.findOne({username: req.body.username})
        console.table(accountData)
        if (accountData.length = 0){
            req.data = {
                status: 404,
                message: 'Tài khoản không tồn tại!',
                data: null
            }
            next()
        }
        if (bcrypt.compareSync(req.body.password, accountData.password) === false){
            req.data = {
                status: 403,
                message: 'Sai mật khẩu!',
                data: null
            };
            next()
        }
        delete accountData.password
        req.data = {
            status: 200,
            message: 'Đăng nhận',
            data: accountData
        }
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