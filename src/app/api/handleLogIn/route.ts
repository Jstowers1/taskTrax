"use server"
import pool from "../../libs/mysql";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { encrypt } from "../../libs/lib";


export async function POST(req){
    const data = await req.formData();

    const username = data.get('username');
    const pwd = data.get('pwd');

    try{
        const db = await pool.getConnection();
        const[rows] = await db.execute('SELECT username, password FROM users WHERE username = ? AND password = ?', [username, pwd]);
        const data = <any>rows;
        if(data.length === 1){
            const result = await db.execute('SELECT user_id FROM users WHERE username = ?', [username]);
            const userID = <any>result[0][0];
            const user = {username: username, userID: userID.user_id};
            // Create the session
            const expires = new Date(Date.now() + 10 * 10000);
            const session = await encrypt({ user, expires });

            // Save the session in a cookie console.log('cookies?!');
            cookies().set("session", session);
            return NextResponse.json({ status: 200 })
        } else {
            return NextResponse.json({error: "Invalid username or password!"},{ status: 400 });
        }
    }catch (error){
        console.log(error);
        return NextResponse.json({
            error: error
        }, {status: 500})
    }
    
}