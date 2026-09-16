import {NextResponse,type NextRequest} from 'next/server';
export function middleware(request:NextRequest){const headers=new Headers(request.headers);headers.set('x-erasflans-language',request.nextUrl.pathname.split('/')[1]==='en'?'en':'tr');return NextResponse.next({request:{headers}})}
export const config={matcher:['/((?!assets|images|favicon).*)']};
