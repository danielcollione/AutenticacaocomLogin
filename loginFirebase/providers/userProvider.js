const firebase = require('firebase')
const firebaseConfig = require('./config.js')

//firebase.initializeApp(firebaseConfig);


export const register = (email,password) => {
    return new Promise( async (resolve, reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((data)=>{
            resolve(data);
        })
        .catch(err => {
            reject(err)
        })
    })
}