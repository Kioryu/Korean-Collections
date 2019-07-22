export const styles = theme => ({
    toolbarBase: {
        // backgroundColor:'white'
    },

    // TitleBar
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },

    // SecondBar
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        marginBottom: 10,
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 1,
    },
    // MainFeaturedPost
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
});