import { connectToMongoDB } from "@/dbConfig/dbConfig";
import Product from '@/moduleProductGet/productget'
import { NextRequest, NextResponse } from "next/server";


export const GET = async (request: NextRequest) =>{
    try {
        await connectToMongoDB();
        const products = await Product.find();
        return new NextResponse(JSON.stringify(products), {status: 200})
    } catch (error) {
        return new NextResponse('Error in featching gets' + error, {status: 500})
    }
}



// connectToMongoDB();

// export async function GET(request: NextRequest) {
//     try {
//         // Retrieve all products from MongoDB
//         const productget = await Product.find();

//         return NextResponse.json({
//             success: true,
//             productget,
//         });

//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }    