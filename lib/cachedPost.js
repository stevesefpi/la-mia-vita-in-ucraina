import { cacheLife, cacheTag } from "next/cache";
import { fetchPost } from "./fetchPost";

export async function getCachedPost(locale, slug) {
    'use cache';

    cacheLife('days');
    cacheTag(`post:${locale}:${slug}`);
    cacheTag(`posts:${locale}`);
    
    return fetchPost(locale, slug);
}