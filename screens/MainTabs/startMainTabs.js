import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const startApp = async () => {


    

   try {
    const leftButtons = [
            {
                icon: await Icon.getImageSource('md-menu', 30),
                title: "General Settings",
                id: 'sideDrawerToggle'
            }
        ]
    const rightButtons = [
        {
            icon: await Icon.getImageSource('md-settings', 30),
            title: "App Settings",
            id: 'settingsToggle'
        }
    ]
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "click.ProfileScreen",
                    label: "Profile",
                    title: "Profile",
                    icon: await Icon.getImageSource('md-person', 30),
                    navigatorButtons: {
                        leftButtons: leftButtons,
                        rightButtons: rightButtons
                    }
                },
                {
                    screen: "click.PointsScreen",
                    label: "Points",
                    title: "Points",
                    icon: await Icon.getImageSource('md-map', 30),
                    navigatorButtons: {
                        leftButtons: leftButtons,
                        rightButtons: rightButtons
                    }
                },
                {
                    screen: "click.HomeScreen",
                    label: "Home",
                    title: "Home",
                    icon: await Icon.getImageSource('md-home', 30),
                    navigatorButtons: {
                        leftButtons: leftButtons,
                        rightButtons: rightButtons
                    }
                },
                {
                    screen: "click.ChallengeScreen",
                    label: "Challenge",
                    title: "Challenge",
                    icon: await Icon.getImageSource('md-cash', 30),
                    navigatorButtons: {
                        leftButtons: leftButtons,
                        rightButtons: rightButtons
                    }
                },
                {
                    screen: "click.LeaderBoardScreen",
                    label: "Leaderboard",
                    title: "Leaderboard",
                    icon: await Icon.getImageSource('md-clipboard', 30),
                    navigatorButtons: {
                        leftButtons: leftButtons,
                        rightButtons: rightButtons
                    }
                }
            ],
            passProps: {
            },
            tabsStyle: { 
                initialTabIndex: 2, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
            },
            appStyle: {
                initialTabIndex: 2,
                navBarBackgroundColor: '#FF821A',
                navBarTextColor: '#FFFFFF',
                navBarButtonColor: '#FFFFFF'
            },
            drawer: {
                left: {
                    screen: 'click.SideDrawerScreen'
                },
                right: {
                    screen: 'click.SettingsDrawer'
                }
            }
        })
   }catch(err) {
        console.log(err)
   }

    
}

export default startApp;
