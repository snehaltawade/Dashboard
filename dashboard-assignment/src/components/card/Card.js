const Card=(props)=>{
    return(
        <>
        <div className="snehall" style={{minHeight:'500px'}}>
            {props.children}
        </div>
        </>
    )
}

export default Card;