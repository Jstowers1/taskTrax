import { NextResponse } from "next/server";
import pool from "../../libs/mysql";

export async function POST(req){
    const data = await req.formData();

    const username = data.get('username');
    const pwd = data.get('pwd');

    try{
        const db = await pool.getConnection();
        const[rows] = await db.execute('SELECT username, password FROM users WHERE username = ? AND password = ?', [username, pwd]);
        const data = <any>rows;
        console.log(data.length);
        if(data.length === 1){
            db.release();
            return NextResponse.json({error: "Username already taken!"}, { status: 400 });
        }else{
            db.query('INSERT INTO users (username, password) VALUES ( ?, ? )', [username, pwd]);
            db.release();
            return NextResponse.json({status: 200});
        }

    }catch (error){
        return NextResponse.json({
            error: error
        }, {status: 500})
    }
    
}