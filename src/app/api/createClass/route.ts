import { NextResponse } from "next/server";
import pool from "../../libs/mysql";
import { getSession } from "../../libs/lib"

export async function POST(req){
    const session = await getSession();
    const userID = JSON.stringify(session.user.userID, null, 2)

    const data = await req.formData();
    const className = data.get('name');
    const classColor = data.get('colorInput');
    
    try{
        const db = await pool.getConnection();
        db.query('INSERT INTO subject (name, color) VALUES ( ?, ? )', [className, classColor]);
        const[rows] = await db.execute('SELECT LAST_INSERT_ID()');
        const data = <any>rows;
        db.query('INSERT INTO subjectConnector (userID, subjectID) VALUES ( ?, ?)', [userID ,data[0]['LAST_INSERT_ID()']]);

        db.release();
        return NextResponse.json({message:"Class successfully made"},{status: 202});
    }catch (error){
        console.log(error);
        return NextResponse.json({
            error: error
        }, {status: 500})
    }
}