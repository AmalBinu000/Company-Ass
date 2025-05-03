import regUser from "../models/register.model.js"


export const getUser = async (req,res)=>{
    try {
        const userData = new regUser(req.body)
        await userData.save()

        res.status(201).send({userData,message:"user added succesfull"})
    } catch (error) {
        res.status(500).json({error})
    }
}

export const signIn = async(req,res)=>{
    try {
        let {email,password} = req.body
        const userData = await regUser.findOne({email})

        if(password != userData.password){
            return res.status(404).json({message:"password not matching"})
        }

        res.status(200).json({userData , message:"login sucessfull"})
    } catch (error) {
        res.status(500).send({error})
    }
}

