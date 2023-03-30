export default function Button (btn){
    return(
        <button onClick={btn.fn}>Count is {btn.count}</button>
    )
}

