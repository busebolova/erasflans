import './globals.css';
import {headers} from 'next/headers';
import {Preloader} from '@/components/hero';
export const metadata={icons:{icon:'/favicon.svg'}};
export default async function Layout({children}:{children:React.ReactNode}){const h=await headers();return <html lang={h.get('x-erasflans-language')==='en'?'en':'tr'}><body><Preloader/>{children}</body></html>}
