import { scrapingDataToDb } from '@/services/api/scraping';
import { NextResponse } from 'next/server';

export async function GET(){
    try{
        const data = await scrapingDataToDb();
    
        return NextResponse.json({success: true, data: data});
    }catch(error){
        return NextResponse.json({success: false, message: error.message}, {status: 500});
    }
} 