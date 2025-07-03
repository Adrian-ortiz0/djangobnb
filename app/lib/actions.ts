'use server';

import { cookies } from "next/headers";

export async function handleRefresh() {
    console.log('handlerefresh');

    const refreshToken = await getRefreshToken();

    try {
        const response = await fetch('http://localhost:8000/api/auth/token/refresh/', {
            method: 'POST',
            body: JSON.stringify({ refresh: refreshToken }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        console.log('response:', json);

        if (json.access) {
            const cookieStore = await cookies();
            await cookieStore.set('session_access_token', json.access, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60,
                path: '/',
            });
            return json.access;
        } else {
            resetAuthCookies();
            return null;
        }
    } catch (error) {
        console.log('error', error);
        resetAuthCookies();
        return null;
    }
}

export async function handleLogin(userId: string, accessToken: string, refreshToken: string){
    (await cookies()).set('session_userid', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV == 'production',
        maxAge: 60 * 60 * 20 * 7,
        path: '/',
    }),

    (await cookies()).set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV == 'production',
        maxAge: 60 * 60,
        path: '/',
    }),

    (await cookies()).set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV == 'production',
        maxAge: 60 * 60 * 20 * 7,
        path: '/',
    })
}

export async function resetAuthCookies() {
    (await cookies()).set('session_userid', '');
    (await cookies()).set('session_access_token', '');
    (await cookies()).set('session_refresh_token', '');
}

//
// Get Data

export async function getUserId(){
    const userId = (await cookies()).get('session_userid')?.value
    return userId ? userId : null
}

export async function getAccessToken(){
    let accessToken = (await cookies()).get('session_access_token')?.value;

    if(!accessToken){
        accessToken = await handleRefresh();
    }

    return accessToken;
}

export async function getRefreshToken(){
    let refreshToken = (await cookies()).get('session_refresh_token')?.value;

    return refreshToken;
}