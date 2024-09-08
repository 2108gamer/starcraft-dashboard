
import connectDB from '@/lib/moongose';
import Transcript from '@/app/models/transcript';
import { auth } from '@/auth';
import { NextResponse } from 'next/server';
export default async function handler() {
  const session = await auth()
  if (!session || !session.user) {
 
    return null; 
  }
  
  await connectDB();

  try {
    const transcripts = await Transcript.find({user: session.user?.name });
    NextResponse.json(transcripts);
  } catch (error) {
    NextResponse.json({ error: 'Error al obtener las transcripciones' });
  }
}