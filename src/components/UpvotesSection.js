import React from 'react';

const UpvotesSection = ({articleName, upvotes, setArticleInfo}) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body[0]);
    }

    return (
    <div id="upvotes-section">
        <button onClick={() => upvoteArticle()}>Add Upvotes</button>
        <p>This post has been upvoted {upvotes} times. Is this real life?</p>

    </div>

    );
}

export default UpvotesSection;