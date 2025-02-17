

const Notification = ({ message , notificationType }) => {

    const successStyle = {

        padding: 10,
        color: "green",
        fontSize: "1.5rem",
        fontStyle: "italic"

    
    }

    const failureStyle = {

        padding: 10,
        color: "red",
        fontSize: "1.5rem",
        fontStyle: "italic"

    }

    if (notificationType === "failure") {

        return (

        <div className="failure" style={failureStyle}>
        `Operation failed :${message}`
        </div>

        )   
    } else if (notificationType === "success"){

        return (
            <div className="success" style={successStyle}>
                "Successful operation"
            </div>
        )
    } else
    
    return  null
    

}

export default Notification