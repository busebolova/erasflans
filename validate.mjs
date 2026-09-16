import fs from 'node:fs/promises';
const base=process.env.SITE_BASE_URL||'http://localhost:3001';
const sitemap=await (await fetch(base+'/sitemap.xml')).text();
const pages=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>new URL(x[1]).pathname);
const errors=[];const titles=new Set();const descriptions=new Set();const allAssets=new Set();
const pageSet=new Set(pages);
async function check(path){const res=await fetch(base+path);const text=await res.text();const lang=path.split('/')[1];const title=text.match(/<title>(.*?)<\/title>/)?.[1];const desc=text.match(/<meta name="description" content="([^"]*)"/)?.[1];if(res.status!==200)errors.push(path+' status '+res.status);if(!text.includes('<html lang="'+lang+'"'))errors.push(path+' wrong HTML language');if((text.match(/<h1\b/g)||[]).length!==1)errors.push(path+' h1 count');if(!title||titles.has(title))errors.push(path+' duplicate/missing title');titles.add(title);if(!desc||descriptions.has(desc))errors.push(path+' duplicate/missing description');descriptions.add(desc);const canonical=text.match(/<link rel="canonical" href="([^"]*)"/)?.[1];if(!canonical||new URL(canonical).pathname!==path)errors.push(path+' canonical');for(const l of ['tr','en','x-default'])if(!text.includes('hreflang="'+l+'"')&&!text.includes('hrefLang="'+l+'"'))errors.push(path+' missing '+l);for(const m of text.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)){try{JSON.parse(m[1])}catch{errors.push(path+' invalid JSON-LD')}}for(const m of text.matchAll(/href="(\/[^"#?]*)[^\"]*"/g)){const href=m[1];if(href.startsWith('/tr')||href.startsWith('/en'))if(!pageSet.has(href))errors.push(path+' broken link '+href)}for(const m of text.matchAll(/<img[^>]+src="([^"]+)"/g))allAssets.add(m[1]);}
for(let i=0;i<pages.length;i+=6)await Promise.all(pages.slice(i,i+6).map(check));
for(const asset of allAssets){const res=await fetch(base+asset);if(!res.ok)errors.push('asset '+asset+' '+res.status)}
const bad=await fetch(base+'/en/does-not-exist');if(bad.status!==404)errors.push('404 returned '+bad.status);
const home=await fetch(base+'/',{redirect:'manual'});if(![307,308].includes(home.status)||home.headers.get('location')!='/tr')errors.push('root redirect');
console.log(JSON.stringify({pages:pages.length,uniqueTitles:titles.size,uniqueDescriptions:descriptions.size,images:allAssets.size,errors},null,2));
await fs.mkdir('outputs',{recursive:true});await fs.writeFile('outputs/validation.json',JSON.stringify({pages:pages.length,uniqueTitles:titles.size,uniqueDescriptions:descriptions.size,images:allAssets.size,errors},null,2));if(errors.length)process.exitCode=1;

