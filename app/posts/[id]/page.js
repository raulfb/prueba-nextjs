export default function Post({params}){
    const{id}= params
    return(
        <h1>Este es el post con id {id}</h1>
    )
}