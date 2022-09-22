import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
    return (
        <div className={classes.detail}>
            <img
                src={props.image}
                alt="Gorgeous place..."
                width="500"
                height="250"
            />
            <h1>Place</h1>
            <address>Some street</address>
            <p>Gorgeous place...</p>
        </div>
    );
}

export default MeetupDetails;
