// app/api/user/route.ts

import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {

    const session = await getServerSession();

  return NextResponse.json({ id: 2, name: "Marko Krastev", session });
}