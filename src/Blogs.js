import React from 'react';

const blogsData = [
    {
        id: 1,
        title: "AI Agents Are Replacing Workflows, Not Developers",
        description: "AI agents are transforming the way software is built by automating repetitive workflows, assisting with coding, and improving productivity.",
        url: "https://thebloggify.vercel.app/blogs/ai-agents-are-replacing-workflows-not-developers",
        date: "Jul 27, 2026",
        readTime: "2 min read"
    },
    {
        id: 2,
        title: "The Great Tech Reallocation: Navigating the Paradox of Layoffs and the AI Hiring Boom",
        description: "The current tech market presents a confusing paradox: continuous headlines of high-profile layoffs alongside intense recruiter competition for talent.",
        url: "https://thebloggify.vercel.app/blogs/the-great-tech-reallocation-navigating-the-paradox-of-layoffs-and-the-ai-hiring-boom",
        date: "Jul 19, 2026",
        readTime: "4 min read"
    }
];

const Blogs = () => {
    return (
        <section className="blogs-section-new" id="blogs">
            <h2 className="section-heading-minimal">Blogs.</h2>

            <div className="blogs-list-new">
                {blogsData.map((blog) => (
                    <a
                        key={blog.id}
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blog-item-new"
                    >
                        <div className="blog-meta-new">
                            <span className="blog-date-time-new">
                                {blog.date} &nbsp;•&nbsp; {blog.readTime}
                            </span>
                            <span className="blog-arrow-new">↗</span>
                        </div>
                        <h3 className="blog-title-text-new">{blog.title}</h3>
                        <p className="blog-desc-text-new">{blog.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
