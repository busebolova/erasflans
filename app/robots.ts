import {origin} from '@/lib/catalog';
export default function robots(){return {rules:{userAgent:'*',allow:'/',disallow:['/__debug','/api/']},sitemap:origin+'/sitemap.xml'};}
