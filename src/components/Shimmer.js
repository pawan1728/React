const Shimmer = () =>{
    return (
        <>
        <div className="Shimmer-container">
        {
        Array(15).fill("")
        .map((e,index)=><div className="Shimmer" key={index}></div>)
       }
        </div>
      
        </>
    )
}
export default Shimmer