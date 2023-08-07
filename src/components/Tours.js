import Card from "./Card"

export default function Tours({tours , removeTour}) {
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Us</h2>
            </div>

            {/* Catds */}

            <div className="cards">
                {
                    tours.map( (tours) => {
                    return (
                        <Card {...tours} removeTour={removeTour}></Card>
                    )
                } )
                }
            </div>
        </div>
    )
}