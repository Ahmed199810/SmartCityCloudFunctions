'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.sendAccedentAlarm = functions.https.onRequest(async (req, res) => {
    const dataBody = req.body;
    console.log(dataBody);
    const accState = dataBody.state;
    const genRef = admin.database().ref('/accedent');
    genRef.child('state').set(accState);
    genRef.child('img').set(dataBody.img);
    genRef.child('num').set(dataBody.num);
    res.json({success: 1, message: "sent successfully"});
    sendNotification();
});

  function sendNotification(){
    
  }