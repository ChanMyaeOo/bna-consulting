import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    homeVendor: {
        background: '#f2f2f2'
    },
    vendorWrap: {
        height: '200px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '95%',
        margin: '0 auto',
    },
    [theme.breakpoints.down('md')]: {
        vendorWrap: {
            "& > img": {
                width: '300px'
            }
        }
    },
    [theme.breakpoints.down('sm')]: {
        vendorWrap: {
            flexDirection: 'column',
            height: 'auto',
            margin: '20px 0',
            "& > img": {
                padding: '20px 0'
            }
        }
    }
}));

export default useStyles;
