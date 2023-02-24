const data ={
    title: "Welcome",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://via.placeholder.com/80"

}

export default function Welcome() {
    return(
        <div  className="box">
            <div className="image">
                <img src = {data.img} alt="placeholder"/>
            </div>
            <h2>{data.title}</h2>
            <p className="big">{data.description}</p>
            <button>Read More</button>
        </div>
    )
}
