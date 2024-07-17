import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    try{
        const { payload } = await jwtVerify(input, key, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch(err){
        return;
    }
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get('session')?.value;
    if(!session) return;
    try{
        const parsed = await decrypt(session);
        parsed.expires = new Date(Date.now() + 10 * 10000);
        const res = NextResponse.next();
        res.cookies.set({
            name:"session",
            value: await encrypt(parsed),
            httpOnly: true,
        });
        return res;
    } catch(err){
        return;
    }
}

export async function getSession() {
    const session = cookies().get('session')?.value;
    if(!session) return null;
    return await decrypt(session);
}
