
import { URLS } from './connection/constants'
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import firebase from 'react-native-firebase'; 

export const apiData = (data)=> new Promise((resolve, reject)=>{
    fetch(URLS.url+'/appApi', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((responseData) => { resolve(responseData); })
    .catch((err) => { reject(err); });
    })

    export const createFormData = (body)=>{
        const data = new FormData();
        data.append(body); 
        Object.keys(body).forEach(key => {
        data.append(key, body[key]);
        });
        return data;
    }


    export async function googleLogin() {

          try {
            // add any configuration settings here:  
            await GoogleSignin.configure(); 
        
            const data = await GoogleSignin.signIn();
            alert(JSON.stringify(data))
            // // create a new firebase credential with the token
            // const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
            // // login with credential
            // const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);        
            // console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
          } catch (e) {
            console.error(e);
          }
      }

          // // facebook login
    // LoginManager.logInWithReadPermissions(["public_profile","email"]).then(
    //   function(result) {
    //     if (result.isCancelled) {
    //       alert("Login cancelled");
    //     } else {
    //       AccessToken.getCurrentAccessToken().then((data)=>{
    //         // callback(data.accessToken) 
    //         // get user, save in db and realm
    //       }).catch(err=>{
    //         alert(err+'in acess token')
    //       })
    //     }
    //   },
    //   function(error) {
    //     alert("Login fail with error: " + error);
    //   } 
    // );

    export function titleCase(str) {
      var splitStr = str.toLowerCase().split(' ');
      for (var i = 0; i < splitStr.length; i++) {
          // You do not need to check if i is larger than splitStr length, as your for does that for you
          // Assign it back to the array
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
      }
      // Directly return the joined string
      return splitStr.join(' '); 
   }