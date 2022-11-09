const fetchComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next:{
            revalidate:10
        }
    })
        .then(res => res.json())
}

export default async function Post({params}){

    const{id}= params
    const comments = await fetchComments(id)
    return(
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}