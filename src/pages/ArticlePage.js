import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFound from './NotFound';
import UpvotesSection from '../components/UpvotesSection';

// match is passed in
// contains if it matches and params
const ArticlePage = ({ match }) => {


    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);


    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

    // useEffect will get called whenever name changes
    // a change listener
    // cant have async input function
    useEffect(() => {
        const fetchData = async () => {
            // request automatically sent to proxy in package.json file
            try{
                const result = await fetch(`/api/articles/${name}`);
                console.log(result);
                const body = await result.json();
                console.log(body[0]);
                setArticleInfo(body[0]);

            } catch(error) {
                console.log(error);
            }


        }
        fetchData();
    }, [name]);

    if (!article) return <NotFound />;

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.votes} setArticleInfo = {setArticleInfo} />
            
            {article.content.map((paragraph,key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h3>Other Articles</h3>
            <ArticlesList articles={otherArticles}/>
            

        </>
    );

    }

export default ArticlePage;