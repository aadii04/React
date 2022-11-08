function Clock(props){

    return (
        <h2>Time now is - {props.today.getHours()} : {props.today.getMinutes()} :{props.today.getSeconds()}</h2>
    )
}

export default Clock;