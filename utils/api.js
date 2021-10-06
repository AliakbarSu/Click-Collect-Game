// import Expo from "expo";
// const { manifest } = Expo.Constants;
// export const API = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
//   ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
//   : `api.example.com`;


import Constants from "expo-constants";


const { manifest } = Constants;

export const API = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

export const LoginURL = "https://q5gkibs2tl.execute-api.us-east-1.amazonaws.com/prod/auth/login"