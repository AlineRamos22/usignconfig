import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';
import { AccountCircle, ArrowUpwardOutlined } from '@mui/icons-material';
import MenuDrawer from '../drawer/MenuDrawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

interface PropsScrollTop {
    children: React.ReactElement;
    window?: () => Window;
    container?: Element;
}

function ScrollTop(props: PropsScrollTop) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleBackTop = (event: React.MouseEvent<HTMLDivElement>) => {
        const backTop = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (backTop) {
            backTop.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box onClick={handleBackTop} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                {children}
            </Box>
        </Fade>
    );
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function AppBarHome() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={drawerOpen}>
                <Toolbar>
                    <Box sx={{ flexGrow: 0 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => setDrawerOpen((state) => !state)}
                            sx={{ mr: 10, ...(drawerOpen && { display: 'none' }) }}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        Setup Player
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            id="primary-search-account-menu"
                            size="small"
                            edge="end"
                            color="inherit"
                            aria-label="account of current user"
                            aria-haspopup="true">
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <MenuDrawer open={drawerOpen} setOpen={setDrawerOpen} props={undefined} />
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop>
                <Fab size="small" aria-label="scroll back to top">
                    <ArrowUpwardOutlined />
                </Fab>
            </ScrollTop>
        </Box>
    );
}
