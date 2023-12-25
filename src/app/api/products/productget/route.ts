import { connectToMongoDB } from "@/dbConfig/dbConfig";
import Product from '@/moduleProductGet/productget'
import { NextRequest, NextResponse } from "next/server";


connectToMongoDB();

export async function GET(request: NextRequest) {
    try {
        // Retrieve all products from MongoDB
        const productget = await Product.find();

        return NextResponse.json({
            success: true,
            productget,
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}    