import pool from "../../libs/mysql";
import { login } from "../../libs/lib";
import { NextResponse } from "next/server";


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
            login(username, userID);
            return NextResponse.json({ status: 200 })
        } else {
            return NextResponse.json({ status: 400 });
        }
    }catch (error){
        console.log(error);
        return NextResponse.json({
            error: error
        }, {status: 500})
    }
    
}