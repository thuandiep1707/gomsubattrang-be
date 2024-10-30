import mongobd from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new mongobd.MongoClient(process.env.DB_URL, (err) => {
    if (err) throw err
})
const db = client.db('gomsubattrang')
 
const productsCollection = db.collection('products')

const accountsCollection = db.collection('accounts')

export { accountsCollection, productsCollection };
