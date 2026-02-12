// const Card = (props)=>{
//     return(
//         <div className="card">
//             <h1>{props.title}</h1>
//         </div>
//     )
// }

// export default Card;



const Card = ({title,caption})=>{
    return(
        <div className="card">
            <h1>{title}</h1>
            <p>{caption}</p>
        </div>
    )
}

export default Card;