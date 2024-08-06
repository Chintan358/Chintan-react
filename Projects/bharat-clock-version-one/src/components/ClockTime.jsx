
let ClockTime = ()=>{

    let date = new Date()

    return <p className="lead">
        current Time : {date.toLocaleDateString()} - {date.toLocaleTimeString()}
    </p>
}

export default ClockTime