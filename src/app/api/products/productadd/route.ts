import { connectToMongoDB } from "@/dbConfig/dbConfig";
import Product from '@/modulesproducts/productModel'
import { NextRequest, NextResponse } from "next/server";


// export default async function handler(req: any, res: any){
//     if(req.method !== "POST"){
//         res.status(405).send({msg:'Only post request are allowed'});
//         return;
//     }
//     const {image, name, price, offer, stars, review, category, sale} = req.body;
//     try {
//         await connectToMongoDB();
//         Product.create({image, name, price, offer, stars, review, category, sale}).then((data) => {
//             console.log(data)
//             res.status(201).send(data)
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(400).send({error, msg: "Somthing want Wrongs!"})
        
//     }
// }





connectToMongoDB();


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { image, name, price, offer, stars, review, category, sale } = reqBody;
        console.log(reqBody);
        const semProduct = await Product.find({image, name, price, offer, stars, review, category, sale})

        if(semProduct){ 
            const newProduct = new Product({image, name, price, offer, stars, review, category, sale})
            const savedProduct = await newProduct.save();
            return NextResponse.json({
                message: 'Product Creadited!',
                success: true,
                savedProduct,
            })
        }else{
            const semNewProduct = new Product({image, name, price, offer, stars, review, category, sale})
            const saveSemNewProduct = await semNewProduct.save();
            return NextResponse.json({
            message: 'Product Creadited!',
            success: true,
            saveSemNewProduct,
            })
            
        }
        
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// export async function POST(request: NextRequest) {
//     try {
//         const reqBody = await request.json();
//         const { image, name, price, offer, stars, review, category, sale } = reqBody;
//         console.log(reqBody);

//         // Find existing product
//         const existingProduct = await Product.findOne({ image, name });

//         if (existingProduct) {
//             // Update existing product
//             existingProduct.price = price;
//             existingProduct.offer = offer;
//             existingProduct.stars = stars;
//             existingProduct.review = review;
//             existingProduct.category = category;
//             existingProduct.sale = sale;

//             const newProduct = new Product({ image, name, price, offer, stars, review, category, sale });
//             const updatedProduct = await existingProduct.save();
            
//             return NextResponse.json({
//                 message: 'Product Updated!',
//                 success: true,
//                 updatedProduct,
//             });
//         } else {
//             // Create new product
//             const newProduct = new Product({ image, name, price, offer, stars, review, category, sale });
//             const savedProduct = await newProduct.save();

//             return NextResponse.json({
//                 message: 'Product Created!',
//                 success: true,
//                 savedProduct,
//             });
//         }

//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }


        // Check if a product with the same sale value already exists
        // const existingProduct = await Product.findOne({ sale });

        // if (existingProduct) {
        //     // Update the existing product
        //     existingProduct.image = image;
        //     existingProduct.name = name;
        //     // Update other fields as needed
        //     // existingProduct.semData = semData;

        //     // Save the updated product
        //     // const updatedProduct = await existingProduct.save();

        //     return NextResponse.json({
        //         message: 'Product Updated!',
        //         success: true,
        //         // updatedProduct,
        //     });
        // } else {
        // }
        // Create a new product instance with semantic data
        // const newProduct = new Product({ image, name, price, offer, stars, review, category, sale });

        // Save the product to MongoDB
        // const savedProduct = await newProduct.save();

        // return NextResponse.json({
        //     message: 'Product Created!',
        //     success: true,
        //     savedProduct,
        // });

