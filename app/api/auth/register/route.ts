import { NextResponse } from 'next/server';
import { mockRegister } from '@/lib/mockApi';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body ?? {};

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: 'تمام فیلدها الزامی است.' },
      { status: 400 }
    );
  }

  const user = await mockRegister(name, email, password);
  return NextResponse.json({ data: user });
}
