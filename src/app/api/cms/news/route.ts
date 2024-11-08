import connectToMongoDB from "@/mongodb/connectToMongoDB";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectToMongoDB();
  const data = await request.json();
  console.log(data);
  return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
}
