import db from '../config/database.js'
import dayjs from "dayjs"


export async function creatProducts(req, res) {

    const { name, price, unit, category, picture} = req.body
    const userSession = res.locals.session


    try {
        await db.collection("products").insertOne({name:name, price:price, unit:unit, category:category, picture:picture })

        res.status(201).send("create")


    } catch (err) {
        res.status(500).send(err.message)
    }

}



export async function listProducts(req, res) {

    const userSession = res.locals.session


    try {
        const products = await db.collection("products").find().sort({name: 1}).toArray()

        res.send(products)


    } catch (err) {
        res.status(500).send(err.message)
    }

}


