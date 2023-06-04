// eslint-disable-next-line @typescript-eslint/no-unused-vars
import useDarkMode from 'use-dark-mode';
import {
	Button,
	createTheme,
	NextUIProvider,
	Input,
	useTheme,
} from '@nextui-org/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Fragment } from 'react';
import DLSwitch from './Components/DarkLightToggle';
import HomeScreen from './Screens/HomeScreen';
import AboutUsScreen from './Screens/AboutUsScreen';
import PortfolioScreen from './Screens/PortfolioScreen';
function App() {
	const lightTheme = createTheme({
		type: 'light',
		theme: {
			colors: {
				// brand colors
				primaryLight: '$green200',
				primaryLightHover: '$green300',
				primaryLightActive: '$green400',
				primaryLightContrast: '$green600',
				primary: '#4ADE7B',
				primaryBorder: '$green500',
				primaryBorderHover: '$green600',
				primarySolidHover: '$green700',
				primarySolidContrast: '$white',
				primaryShadow: '$green500',

				gradient:
					'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
				link: '#5E1DAD',

				// you can also create your own color
				myColor: '#ff4ecd',

				// ...  more colors
			},
		},
	});

	const darkTheme = createTheme({
		type: 'dark',
		theme: {
			colors: {
				primaryLight: '#A27CE1',
				primaryLightHover: '#B989E6',
				primaryLightActive: '#C89CE8',
				primaryLightContrast: '#F4EEFF',
				primary: '#845EC2',
				primaryBorder: '#7C4EC4',
				primaryBorderHover: '#6D3EBD',
				primarySolidHover: '#6133B3',
				primarySolidContrast: '#FFFFFF',
				primaryShadow: '#5B3DA7',
				gradient:
					'linear-gradient(112deg, #845EC2 -25%, #F26B83 -10%, #F58B6C 80%)',
				link: '#5E1DAD',
				success: '#2ECC71',
				successLight: '#48D689',
				successDark: '#1E9E51',
				warning: '#FFA900',
				warningLight: '#FFB341',
				warningDark: '#C77C00',
				error: '#FF4560',
				errorLight: '#FF6876',
				errorDark: '#CF2C3A',
				//... more colors
			},
			space: {},
			fonts: {},
		},
	});

	const darkMode = useDarkMode(true);

	return (
		<NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
			<Router>
				<Fragment>
					<Routes>
						<Route
							path="/website_frontend/"
							element={
								<div>
									<Navbar></Navbar>
									<h1>Cringe</h1>

									<DLSwitch></DLSwitch>
								</div>
							}
						>
						</Route>
							<Route
								path="/website_frontend/dashboard/"
								element={<HomeScreen></HomeScreen>}
							></Route>
							<Route
								path="/website_frontend/about-us/"
								element={<AboutUsScreen></AboutUsScreen>}
							></Route>
							<Route
								path="/website_frontend/portfolio/"
								element={<PortfolioScreen></PortfolioScreen>}
							></Route>
					</Routes>
				</Fragment>
			</Router>
		</NextUIProvider>
	);
}

export default App;
