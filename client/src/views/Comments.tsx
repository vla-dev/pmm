import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import CommentBox, { Comment } from "../components/CommentBox";
import CreateComment, { ICreateCommentForm } from "../components/CreateComment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const jResponse = await response.json();

        setComments(jResponse.reverse());
    }

    const handleAddComment = async (values: ICreateCommentForm) => {
        try {
            const response = await fetch('/api/comment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const jResponse = await response.json();
            console.log(jResponse);

            await fetchComments();
        } catch (e) {
            console.error(e);
        }
    }

    const handleUpdateComment = async (comment: Comment) => {
        try {
            const response = await fetch(`/api/comment/edit?id=${comment.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    body: comment.body
                })
            });
            const jResponse = await response.json();
            console.log(jResponse);

            await fetchComments();
        } catch (e) {
            console.error(e);
        }
    }

    const handleDeleteComment = async (comment: Comment) => {
        try {
            const response = await fetch(`/api/comment/delete?id=${comment.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jResponse = await response.json();
            console.log(jResponse);

            await fetchComments();
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchComments();
    }, [])

    return <>
        <Banner label="Comments" />
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <CreateComment onCreate={handleAddComment} />
            {
                comments.length > 0
                    ? comments.map((comment: Comment) => <CommentBox
                        key={`comment-${comment.id}`}
                        comment={comment}
                        onUpdate={handleUpdateComment}
                        onDelete={handleDeleteComment}
                    />)
                    : null
            }
        </div>
    </>
}

export default Comments;