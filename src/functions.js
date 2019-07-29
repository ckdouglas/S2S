
import { URLS } from './connection/constants';
import { Platform } from 'react-native'
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import firebase from 'react-native-firebase'; 
import axios from 'axios';

export const apiData = (data)=> new Promise((resolve, reject)=>{
    fetch(URLS.url+'/appApi', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
      }).then((response) => response.json())
      .then((responseData) => { resolve(responseData); })
      .catch((err) => { reject(err); }); 
})

export const handleImageUpload = (photo,shoes_id) => {
  fetch( URLS.url+"/api/upload", {
    method: "POST",
    body: createFormData(photo, {shoesId:shoes_id})
  }).then(
    response => response.json()
    ).then(response => {
      console.log("Upload succes", response);
      alert("Upload success!");
    })
    .catch(error => {
      console.log("Upload error", error);
      alert("Upload failed!");
    });
};

const createFormData =(photo,body)=>{
  const data = new FormData();
  data.append("image",{
      name:photo.fileName,
      type:photo.type,
      uri: Platform.OS === 'android'?photo.uri : photo.uri.replace("file://","")
  });
  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });
  return data;
}


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