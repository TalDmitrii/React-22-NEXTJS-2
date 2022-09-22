import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
    return (
        <div className={classes.detail}>
            <img src={props.image} alt={props.title} width="500" height="250" />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
    );
}

export default MeetupDetails;
