import { resolve } from "styled-jsx/css"

const fetchComments = async(id) => {
    await new Promise(resolve => setTimeout(resolve,13000))
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
        <ul style={{fontSize:'11px',background:'#eee'}}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}