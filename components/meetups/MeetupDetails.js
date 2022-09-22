import classes from "./MeetupDetails.module.css";

function MeetupDetails() {
    return (
        <div className={classes.detail}>
            <img
                src="https://wallpapercave.com/wp/5d5Ox2o.jpg"
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
