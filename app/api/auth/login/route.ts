import { NextResponse } from 'next/server';
import { mockLogin } from '@/lib/mockApi';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body ?? {};

  if (!email || !password) {
    return NextResponse.json(
      { error: 'ایمیل و رمز عبور الزامی است.' },
      { status: 400 }
    );
  }

  const user = await mockLogin(email, password);
  if (!user) {
    return NextResponse.json({ error: 'ورود ناموفق بود.' }, { status: 401 });
  }

  return NextResponse.json({ data: user });
}
