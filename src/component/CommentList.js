import React, { useState } from 'react';  // Добавлен import useState

const CommentsList = () => {

	const [comments, setComments] = useState([
		{ id: 1, text: "Это первый комментарий" },
		{ id: 2, text: "Это второй комментарий" },
		{ id: 3, text: "Это третий комментарий" }
	]);

	const deleteComment = (id) => {
		setComments(prevComments => prevComments.filter(comment => comment.id !== id));
	};

	return (
		<div>
			<h3 className='subtitle'>Список комментариев</h3>
			<ul className='list'>
				{comments.map((comment) => (
					<li className='item' key={comment.id}>
						{comment.text}
						<button className='btn' onClick={() => deleteComment(comment.id)}>Удалить</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CommentsList;