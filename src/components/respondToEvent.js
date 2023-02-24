export default function RespondToEvent() {
    function handleClick() {
        alert("You press the button");
    }
    return(
        <div className="box">
            <button onClick={handleClick}>Press!</button>
        </div>
    )
}