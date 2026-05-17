import { id } from "zod/locales";
import Product from "../model/Products.js";
import { productSchema } from "../validation/productValidation.js";
/*Backend chuẩn rất hay dùng status code:
Code	Ý nghĩa
200	thành công
201	tạo thành công
400	request lỗi
401	chưa login
403	không có quyền
404	không tìm thấy
500	lỗi server*/
//Create Product

export const CreateProduct =  async(req , res , next)=>{
    try {
        const validatedData = productSchema.parse(req.body);
     
    const newProduct = await Product.create(validatedData);
    res.status(201).json(newProduct);}
catch (error) {
       next(error); 
    }
};
// Get All Product
export const GetAllProduct =  async(req , res)=>{
     try {
        const product = await Product.find();
        res.status(200).json(product);
        }
        catch(error) {
            next(error);
        } 

};
// Get Single Product
export const GetSingleProduct =  async(req , res)=>{
 try{
    const product = await Product.findById(
        req.params.id
    );
    res.status(200).json(product);}
    catch (error) {
        next(error);
    }
};
// Update Product
export const UpdateProduct =async(req , res)=>{
 try{
    const validatedData = productSchema.parse(req.body);
    const updateproduct = await Product.findByIdAndUpdate(
    req.params.id ,
    validatedData,
    req.body ,
    { new: true});
    res.status(200).json(updateproduct);}
    catch (error) {
        next(error);
    }
};
//Delete product
export const DeleteProduct =async(req , res)=>{
    try{
    const deleteproduct = await Product.findByIdAndDelete(
        req.params.id,
       
    );
    res.status(200).json({message:"Xóa sản phẩm thành công"

    });}
    catch (error) {
        next(error);
    }
};