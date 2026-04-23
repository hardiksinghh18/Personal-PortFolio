import React, { useState, useEffect } from 'react';

const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Technology is best when it brings people together.", author: "Matt Mullenweg" },
    { text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.", author: "Mark Zuckerberg" },
    { text: "Software is eating the world.", author: "Marc Andreessen" },
    { text: "Computing is not about computers anymore. It is about living.", author: "Nicholas Negroponte" },
    { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "It's not a bug – it's an undocumented feature.", author: "Anonymous" },
    { text: "With every leap in technology, we inch closer to forgetting what humanity is.", author: "Hardik Singh" }
];

const TechQuotes = () => {
    const [quote, setQuote] = useState({ text: "", author: "" });

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, []);

    return (
        <div className="tech-quotes-section">
            <div className="quote-separator"></div>
            <div className="quote-container">
                <blockquote className="quote-text">
                    "{quote.text}"
                </blockquote>
                <cite className="quote-author">
                    — {quote.author}
                </cite>
            </div>
        </div>
    );
};

export default TechQuotes;
