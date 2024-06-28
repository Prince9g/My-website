document.getElementById('load-more').addEventListener('click', function() {
    const morePosts = `
        <article>
            <h2>The Benefits of Real-Time Cheque Tracking</h2>
            <p>Highlight the advantages of real-time cheque tracking for users, including increased transparency, peace of mind, and better financial planning. Share success stories or testimonials from users who have benefited from this feature.</p>
        </article>
        <article>
            <h2>Future Trends in Cheque Clearance Technology</h2>
            <p>Look ahead at emerging trends and technologies that could shape the future of cheque clearance. Discuss innovations like blockchain, AI, and enhanced security protocols, and how they might impact the industry.</p>
        </article>
    `;
    
    document.getElementById('blog-posts').insertAdjacentHTML('beforeend', morePosts);
});
