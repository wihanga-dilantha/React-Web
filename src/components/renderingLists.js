const products = [
    {
        id:1,
        description: 'laptop'
    },
    {
        id:2,
        description: 'desktop'
    },
    {
        id:3,
        description: 'palmtop'
    }
]

export default function RenderingLists() {
    return(
        <div className="box">
            <h2> Rendering Lists</h2>
            <ul>
                {products.map((products) => {
                    return(
                     <li key={products.id}>{products.description}</li>   
                    )
                })}    
            </ul>
        </div>
    )
}