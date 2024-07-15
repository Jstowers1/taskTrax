import { NextResponse } from "next/server";
import pool from "../../libs/mysql";
import * as bcrypt from 'bcryptjs';

export async function POST(req){
    const data = await req.formData();


    const username = data.get('username');
    const password = data.get('pwd');


    try{
        var salt = bcrypt.genSaltSync(10);
        const pwd = bcrypt.hashSync(password, salt);

        const db = await pool.getConnection();
        const[rows] = await db.execute('SELECT username, password FROM users WHERE username = ?', [username]);
        const data = <any>rows;

        if(data.length >= 1){
            db.release();
            return NextResponse.json({error: "Username already taken!"}, { status: 400 });
        }else{
            db.query('INSERT INTO users (username, password) VALUES ( ?, ? )', [username, pwd]);
            db.release();
            return NextResponse.json({status: 200});
        }

    }catch (error){
        console.log(error);
        return NextResponse.json({
            error: error
        }, {status: 500})
    }
    
}