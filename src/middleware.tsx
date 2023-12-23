import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const urlPath = request.nextUrl.pathname;
    console.log(`User visit the URL: ${urlPath}`)

    const profileProtectedWhenNotNogin = urlPath.startsWith('/profile');
    const menProtectedWhenNotNogin = urlPath.startsWith('/men');
    const womenProtectedWhenNotNogin = urlPath.startsWith('/women');
    const beautyProtectedWhenNotNogin = urlPath.startsWith('/beauty');
    const studioProtectedWhenNotNogin = urlPath.startsWith('/studio');
    const signUpRoute = urlPath.startsWith('/signupon');
    const logInRoute = urlPath.startsWith('/login');

    const tokenInBrowser = request.cookies.get('token')?.value;
    // if loggin their access the other pages
    if(profileProtectedWhenNotNogin && !tokenInBrowser){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    if(menProtectedWhenNotNogin && !tokenInBrowser){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    if(womenProtectedWhenNotNogin && !tokenInBrowser){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    if(beautyProtectedWhenNotNogin && !tokenInBrowser){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    if(studioProtectedWhenNotNogin && !tokenInBrowser){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    // if user is logg in
    if(tokenInBrowser && signUpRoute){
        return NextResponse.redirect(new URL('/profile', request.nextUrl))
    }
    if(tokenInBrowser && logInRoute){
        return NextResponse.redirect(new URL('/profile', request.nextUrl))
    }
}

export const config = {
    matcher: ['/profile', '/signupon', '/login', '/men', '/women', '/beauty', '/studio']
}
