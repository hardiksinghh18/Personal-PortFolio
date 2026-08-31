import React, { useState, useEffect } from 'react';

const quotes = [
    //     { text: "The best way to predict the future is to invent it.", source: "Alan Kay" },
    // { text: "Technology is best when it brings people together.", source: "Matt Mullenweg" },
    // { text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.", source: "Mark Zuckerberg" },
    // { text: "Software is eating the world.", source: "Marc Andreessen" },
    // { text: "Computing is not about computers anymore. It is about living.", source: "Nicholas Negroponte" },
    // { text: "Design is not just what it looks like and feels like. Design is how it works.", source: "Steve Jobs" },
    // { text: "First, solve the problem. Then, write the code.", source: "John Johnson" },
    // { text: "It's not a bug – it's an undocumented feature.", source: "Anonymous" },
    // { text: "With every leap in technology, we inch closer to forgetting what humanity is.", source: "Hardik Singh" }
    {
        shloka: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        translation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inactive duty.",
        source: "Bhagavad Gita — Chapter 2, Verse 47"
    },
    {
        shloka: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
        translation: "Whenever there is a decline in righteousness and an increase in unrighteousness, O Bharata, at that time I manifest Myself on earth.",
        source: "Bhagavad Gita — Chapter 4, Verse 7"
    },
    {
        shloka: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
        translation: "Perform your duty with equipoise, O Arjuna, abandoning all attachment to success or failure. Such equanimity of mind is called Yoga.",
        source: "Bhagavad Gita — Chapter 2, Verse 48"
    },
    {
        shloka: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।\nतस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्॥",
        translation: "One who is united with the Divine consciousness casts away both good and evil deeds in this life. Therefore, strive for Yoga, which is the art of performing all work with skill.",
        source: "Bhagavad Gita — Chapter 2, Verse 50"
    },
    {
        shloka: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
        translation: "Elevate yourself through the power of your mind, and do not degrade yourself. For the mind can be the friend of the soul, and the mind can be the enemy of the soul.",
        source: "Bhagavad Gita — Chapter 6, Verse 5"
    },
    {
        shloka: "श्रद्धावॉंल्लभते ज्ञानं तत्परः संयतेन्द्रियः।\nज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥",
        translation: "Those who have faith, who are dedicated, and who control their senses achieve transcendental knowledge. Having achieved such knowledge, they quickly attain supreme peace.",
        source: "Bhagavad Gita — Chapter 4, Verse 39"
    },
    {
        shloka: "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
        translation: "The soul is neither born, nor does it ever die; nor having once existed, does it ever cease to be. The soul is unborn, eternal, immortal, and primeval. It is not destroyed when the body is destroyed.",
        source: "Bhagavad Gita — Chapter 2, Verse 20"
    }
];

const TechQuotes = () => {
    const [quote, setQuote] = useState({ shloka: "", translation: "", source: "" });

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, []);

    return (
        <div className="tech-quotes-section">
            <div className="quote-separator"></div>
            <div className="quote-container">
                {quote.shloka && (
                    <blockquote className="quote-shloka">
                        {quote.shloka}
                    </blockquote>
                )}
                {quote.translation && (
                    <blockquote className="quote-text">
                        "{quote.translation}"
                    </blockquote>
                )}
                {quote.source && (
                    <cite className="quote-source">
                        — {quote.source}
                    </cite>
                )}
            </div>
        </div>
    );
};

export default TechQuotes;
