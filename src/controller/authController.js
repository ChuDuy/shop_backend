import User from "../User.js";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
//Đăng kí
export const registerUser = async ( req , res , next )=>{
    try {
        const { name, email, password} = req.body;
        const existingUser= await User.findOne({email});
        if (existingUser) {
             return res.status(400).json(
                {
                    message : "Email đã tồn tại"
                }
             );
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({
            name,
            email,
            password : hashedPassword,
        });
        res.status(200).json(newUser);
    }
    catch (error)
    {
        next(error);
    }
};
//Đăng nhập
export const loginUser= async(req , res ,next)=>{
    try {
        const {email , password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({
                message : " Email không tồn tại"
            });
        }
        const checkpass = await bcrypt.compare(
            password,
            user.password
        );
        if (!checkpass) {
            return res.status(400).json({
                message: "Sai mật khẩu"
            });
        }
        const token = jwt.sign({
            id : user._id,
            role : user.role,                 },
            process.env.JWT_SECRET, {
                expiresIn :"7d"
            }
        );
        res.json(
            {
                message : "Login thành công", token,
            }
        );
    }
    catch(error){
        next(error);
    }
}