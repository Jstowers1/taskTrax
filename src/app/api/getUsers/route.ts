import { NextResponse } from "next/server";
import pool from "../../libs/mysql";

export async function GET(){
    try{
        const db = await pool.getConnection();
        const[rows] = await db.execute('SELECT * FROM users');
        db.release();
        return NextResponse.json(rows);
    }catch (error){
        return NextResponse.json({
            error: error
        }, {status: 500})
    }
}