const MyMessage = ({message}) => {
    if(message.attachments && message.attachments.length >0) {
        return (
            <img 
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{float:'right'}}/>
        )
    }

    return (
        <div className="message" style={{float: 'right', marginRight: '18px', backgroundColor:'#3b2a50', color:"white"}}>
            {message.text}
        </div>
    );
};

export default MyMessage;