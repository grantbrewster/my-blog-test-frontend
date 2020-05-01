import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/login`, {
            method: 'post',
            body: JSON.stringify({username, text: commentText}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        try{
            const body = await result.json();
            setCommentText(body);
            console.log(body);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <li>
                {commentText}
            </li>
            <label>
                Name:
                <input type="text" value = {username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
                Comment:
                <textarea value={commentText} onChange={(event) => setCommentText(event.target.value)}/>
            </label>
            <button onClick={() => addComment()}>Login</button>
        </div>

    );
}

export default LoginForm;