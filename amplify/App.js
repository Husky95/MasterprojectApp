import React from 'react'

import MainStackNavigator from './src/navigation/AppNavigator'

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import { withAuthenticator } from 'aws-amplify-react-native';
import { AmplifyTheme } from 'aws-amplify-react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { THEME } from './src/utils/theme.js'


const MyButton = Object.assign({}, AmplifyTheme.button, {
backgroundColor: THEME.SECONDARY_COLOR });

const Mycontainer = Object.assign({}, AmplifyTheme.container, {
backgroundColor: "#ffffff",  });

const MysectionHeaderText = Object.assign({}, AmplifyTheme.sectionHeaderText, {
color: "#0000000" });

const Myinput= Object.assign({}, AmplifyTheme.input, {
color: THEME.SECONDARY_COLOR });


const MyphoneInput= Object.assign({}, AmplifyTheme.input, {
color: THEME.SECONDARY_COLOR });

const MysectionFooterLink= Object.assign({}, AmplifyTheme.sectionFooterLink, {
color: THEME.SECONDARY_COLOR });


const MyTheme = Object.assign({}, AmplifyTheme, { button: MyButton,
container: Mycontainer, sectionHeaderText: MysectionHeaderText, input: Myinput, sectionFooterLink:MysectionFooterLink,phoneInput:MyphoneInput });


function App() {
  return (
    <MainStackNavigator />

  );
}
console.disableYellowBox = true;

export default withAuthenticator(App, false, [], null, MyTheme);
