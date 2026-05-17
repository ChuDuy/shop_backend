import{z} from"zod";
export const productSchema =z.object(
    {
        name : z
        .string()
        .min(3, "Tên sản phẩm phải trên 3 kí tự"),
        price : z
        .number()
        .positive("Giá trị phải lớn hơn 0"),
        descriprion :z
        .string()
        .optional(),
        stock : z
        .number()
        .min(0,"Stock k được âm"),
    }
);