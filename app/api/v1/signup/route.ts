import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import client from "../../../lib/db"

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {

    const data = await req.json();

    await prismaClient.user.create({
        data: { 
            username: data.username,
            password: data.password
        } 
    })

    return NextResponse.json({
        message: "User signed up successfully",
})
}

export async function GET() {
    const user = await client.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}