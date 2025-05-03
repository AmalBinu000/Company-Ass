import User from "../models/usermodel.js";


export const regUser = async(req,res)=>{
    try {
        const {userName,email,password} = req.body
        const user1 = await User.find({email})

        if(userName == user1.userName){
            res.status(400).json({message:"user already exist"})
        }

        const hashedPassword = await argon2.hash(password)
        const userData = new User({userName,email,password:hashedPassword})
        await userData.save()
        res.status(200).json(userData)

    } catch (error) {
        res.status(500).json(error)
    }
}


export const loginUser = async(req,res)=>{
    try {
        const { userName, email, password } = req.body;
    
        
        const userData = await regUser.findOne({ email });
        if (!userData) {
          return res.status(404).json({ message: "User not found" });
        }
    
        
        const isPasswordCorrect = await argon2.verify(userData.password, password);
        if (!isPasswordCorrect) {
          return res.status(401).json({ message: "Invalid password" });
        }
    
        
        res.status(200).json({ message: "User logged in successfully" });
    
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}