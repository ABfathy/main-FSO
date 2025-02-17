

const Notification = ({ message , notificationType }) => {

    const successStyle = {

        padding: 10,
        background: "lightgrey",
        color: "green",
        fontSize: "1.5rem",
        fontStyle: "italic",
        borderStyle: "solid",
        borderRadius: 5


    
    }

    const failureStyle = {

        padding: 10,
        background: "lightgrey",
        color: "red",
        fontSize: "1.5rem",
        fontStyle: "italic",
        borderStyle: "solid",
        borderRadius: 5

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