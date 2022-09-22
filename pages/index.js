import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 1,
        title: "A first meetup",
        image: "https://wallpapercave.com/wp/5d5Ox2o.jpg",
        address: "Some city",
        description: "Gorgeous place...",
    },
    {
        id: 2,
        title: "A second meetup",
        image: "https://wallpapercave.com/wp/s40TMOk.jpg",
        address: "Some second city",
        description: "Gorgeous place...",
    },
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 10,
    };
}

export default HomePage;
