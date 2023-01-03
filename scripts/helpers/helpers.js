'use strict'

hexo.extend.helper.register('filterPostsByYear', (posts) => {
    const reorderedPosts = {};
    posts.forEach((post) => {
        const year = post.date.year()
        const currentPosts = reorderedPosts[year];
        if(currentPosts) {
            reorderedPosts[year].push(post);
        } else {
            reorderedPosts[year] = [post];
        }
    });

    const sitePosts = posts.sort((a, b) => a.date.isAfter(b));
    return [sitePosts, reorderedPosts];
})