import { NextResponse } from "next/server";

export async function GET(){
    try {
        const response=NextResponse.json({
            message:"Logout successsful",
            success:true
        })
        response.cookies.set("token","",{
            httpOnly:true,
            maxAge:0
            })
            return response;
        
    } catch (error) {
        console.error(error);

        
    }

}