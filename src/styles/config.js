import { Platform } from "react-native";
import colors from "./colors";

const $primaryColor = colors.primary;
const $secondaryColor = '#c2185b';
const $lightColor = '#607d8b';
const $warningColor = '#d32f2f';
const $successColor = '#00c853';
const $layout = 'light';
const $borderRadius = 10;
const $paddingHorizontal = 25;
const $titleSize = 28;

export default {
	appVersion: "1.1",
	paddingHorizontal: $paddingHorizontal,
	titleSize: $titleSize,
	headingFont: Platform.OS == 'android' ? 'Poppins_600SemiBold' : 'helvetica-bold',
	defaultFont: Platform.OS == 'android' ? 'Poppins_400Regular' : 'helvetica',
	defaultFontSize: Platform.OS == 'ios' ? 16 : 14,
	layoutMode: $layout,
	backgroundColor: $layout == 'dark' ? '#222222' : '#f2f2f2',
	listBackgroundColor: $layout == 'dark' ? '#111111' : '#ffffff',
	listSeparatorColor: $layout == 'dark' ? '#222222' : '#eeeeee',
	tabBarColor: $layout == 'dark' ? '#111111' : '#fffffff',
	cardColor: $layout == 'dark' ? '#131313' : '#ffffff',
	defaultFontColor: $layout == 'dark' ? '#f2f2f2' : '#4f555f',
	primaryColor: $primaryColor,
	secondaryColor: $secondaryColor,
	lightColor: $lightColor,
	warningColor: $warningColor,
	successColor: $successColor,
	defaultBorderRadius: $borderRadius,
	badgeColor: 'red',
	badgeTextColor: '#ffffff',
	productDetailLayout: 'layout1',
	field: {
		borderRadius: 10,
		color: colors.heading,
		borderColor: colors.primary,
		backgroundColor: colors.white,
		fontSize: 18,
		padding: 10,
		borderBottomWidth: 2,
		marginBottom: 10
	}, // layout1 or layout2
	style: {
		iconBtn: {
			padding: 5
		},
		iconBtnColor: '#ffffff',
		buttonMargin: {
			marginTop: 20, 
			marginBottom: 20
		},
		roundBtn: {
			padding: 10,
			backgroundColor: $primaryColor,
			alignItems: 'center',
			justifyContent: 'center',
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.18,
			shadowRadius: 1.00,
			elevation: 1,
			borderRadius: 25
		},
		gridCartBtn: {
			padding: 10,
			backgroundColor: $primaryColor,
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: $borderRadius
		},
		form: {
			paddingBottom: 15,
			paddingTop: 35
		},
		formField: {
			marginBottom: 25
		},
		formInput: {
			fontWeight: "bold",
			color: $layout == 'dark' ? '#ffffff' : '#111111',
			fontSize: 16,
			paddingLeft: 23,
			paddingRight: 3,
			paddingTop: 6,
			paddingBottom: 6,
			borderBottomWidth: 1,
			borderBottomColor: '#bcbcbc',
		},
		formInput2: {
			fontWeight: "bold",
			color: '#111111',
			fontSize: 15,
			borderBottomWidth: 0,
			backgroundColor: '#e2e2e2',
			borderRadius: $borderRadius,
			paddingHorizontal: 12,
			marginTop: 5,
			height: 45
		},
		btn: {
			height: 45,
			borderRadius: $borderRadius,
			backgroundColor: $primaryColor,
			alignItems: 'center',
			justifyContent: 'center',
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.18,
			shadowRadius: 1.00,
			elevation: 1,
			flexDirection: 'row',
			paddingHorizontal: 10,
			minWidth: 60,
			alignSelf: 'flex-start'
		},
		btnTxt: {
			fontWeight: 'bold',
			color: $layout == 'dark' ? '#222222' : '#ffffff',
			marginBottom: 0
		},
		btnLg: {
			height: 45,
			borderRadius: $borderRadius,
			backgroundColor: $primaryColor,
			alignItems: 'center',
			justifyContent: 'center',
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.18,
			shadowRadius: 1.00,
			elevation: 1,
			flexDirection: 'row'
		},
		btnLgTxt: {
			fontWeight: 'bold',
			color: $layout == 'dark' ? '#222222' : '#ffffff',
			fontSize: 16,
			marginBottom: 0
		},
		card: {
			shadowColor: $layout == 'dark' ? '#333333' : "#999",
			shadowOffset: {
				width: 0,
				height: 2.5,
			},
			shadowOpacity: 0.1,
			shadowRadius: 5.27,
			elevation: 2,
			borderRadius: $borderRadius,
			backgroundColor: $layout == 'dark' ? '#131313' : '#ffffff',
			marginBottom: 5
		},
		cardShadow: {
			shadowColor: $layout == 'dark' ? '#333333' : "#999",
			shadowOffset: {
				width: 0,
				height: 5,
			},
			shadowOpacity: 0.2,
			shadowRadius: 6.27,
			elevation: 10
		},
		cardHeader: {
			paddingHorizontal: 15
		},
		cardFooter: {
			paddingHorizontal: 15
		},
		cardContent: {
			paddingHorizontal: 15
		},
		labelWrapper: {
			flexDirection: 'row'
		},
		labelIconWrapper: {
			width: 23
		},
		labelText: {
			color: '#a7a6b4',
			fontSize: 13.5
		},
	},
};