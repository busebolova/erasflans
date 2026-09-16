import {origin,allRoutes,routeUrl} from '@/lib/catalog';
export default function sitemap(){return allRoutes().flatMap(r=>(['tr','en'] as const).map(lang=>({url:origin+routeUrl(lang,r),alternates:{languages:{tr:origin+routeUrl('tr',r),en:origin+routeUrl('en',r),'x-default':origin+routeUrl('tr',r)}}})));}
