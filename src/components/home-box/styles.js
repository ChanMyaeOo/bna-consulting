import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    homeBoxWrap: {
        display: "flex",
        maxWidth: "95%",
        margin: "0 auto",
        marginTop: '-80px',
        position: 'relative',
    },
    storyWrap: {
        display: "flex",
        alignItems: "center",
    },
    homeStory: {
        background: "#6a592f",
        padding: "30px",
        height: "auto",
    },
    storyTitle: {
        color: "#fff",
        fontSize: "24px",
    },
    storyContent: {
        lineHeight: "1.5rem",
        color: "#fff",
    },
    icon1: {
        margin: "25px 25px 25px 0",
    },
    icon2: {
        margin: "25px 25px 25px 0",
    },
    icon3: {
        margin: "25px 25px 25px 0",
    },

    approachWrap: {
        display: "flex",
        alignItems: "center",
    },
    homeApproach: {
        background: "#7e6a46",
        padding: "30px",
        height: "auto",
    },
    approachTitle: {
        color: "#fff",
        fontSize: "24px",
    },
    approachContent: {
        lineHeight: "1.5rem",
        color: "#fff",
    },
    missionWrap: {
        display: "flex",
        alignItems: "center",
    },
    homeMission: {
        background: "#ad8e63",
        padding: "30px",
        height: "auto",
    },
    missionTitle: {
        color: "#fff",
        fontSize: "24px",
    },
    missionContent: {
        lineHeight: "1.5rem",
        color: "#fff",
    },
    [theme.breakpoints.down('xs')]: {
        homeBoxWrap: {
            marginTop: 0
        }
    }
}));

export default useStyles;
