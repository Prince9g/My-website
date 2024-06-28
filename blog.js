document.getElementById('load-more').addEventListener('click', function() {
    const morePosts = `
        <article>
            <h2>Blog Post Title 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum.</p>
        </article>
        <article>
            <h2>Blog Post Title 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum.</p>
        </article>
    `;
    
    document.getElementById('blog-posts').insertAdjacentHTML('beforeend', morePosts);
});
