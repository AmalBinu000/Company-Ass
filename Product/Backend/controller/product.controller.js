
import products from "../models/product.model.js"


export const createProduct = async (req,res)=>{
    try {
        const data = new products(req.body)
        await data.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({error})
    }
}
export const getProduct = async (req,res)=>{
    try {
        const data = await products.find();
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({error})
    }
}

export const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params 
        console.log(id)
        const data = await products.findByIdAndDelete(id)

        if (!data) {
            return res.status(404).send({ error: "Todo not found" });
          }
          res.status(200).send({ message: "Todo deleted successfully", todo });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

