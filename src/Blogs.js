import React from 'react';

const blogsData = [
    {
        id: 1,
        title: "AI Agents Are Replacing Workflows, Not Developers",
        description: "AI agents are transforming the way software is built by automating repetitive workflows, assisting with coding, and improving productivity.",
        url: "https://thebloggify.vercel.app/blogs/ai-agents-are-replacing-workflows-not-developers",
    },
    {
        id: 2,
        title: "The Great Tech Reallocation: Navigating the Paradox of Layoffs and the AI Hiring Boom",
        description: "The current tech market presents a confusing paradox: continuous headlines of high-profile layoffs alongside intense recruiter competition for talent.",
        url: "https://thebloggify.vercel.app/blogs/the-great-tech-reallocation-navigating-the-paradox-of-layoffs-and-the-ai-hiring-boom",
    }
];

const Blogs = () => {
    return (
        <section className="blogs-section" id="blogs">
            <div className="hero-main-container">
                <div className="headingPosition">
                    <h1 className="flexrow heading">&lt; My /&gt;</h1>
                    <h1 className="flexrow headingBottom">Blogs</h1>
                </div>

                <div className="blogs-grid">
                    {blogsData.map((blog) => (
                        <a 
                            key={blog.id} 
                            href={blog.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="blog-card-link"
                        >
                                <div className="blog-card">
                                    <div className="blog-card-content">
                                        <h3 className="blog-card-title">{blog.title}</h3>
                                        <p className="blog-card-description">{blog.description}</p>
                                        <div className="blog-card-action">
                                            Read Article 
                                            <i className='bx bx-right-arrow-alt'></i>
                                        </div>
                                    </div>
                                </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
