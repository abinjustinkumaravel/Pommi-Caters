import {initializeApp} from "firebase/app"
import {getFirestore, collection, addDoc} from "firebase/firestore"


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId:import.meta.env.VITE_MEASUREMENT_ID
  };


  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const form =document.getElementById("orderDetails")
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    const count = document.getElementById('count').value;
    const message =document.getElementById('message').value;

    let errorMessage;
    if (phone.length!=10){
        errorMessage="Invalid Phonenumber"
        document.getElementById("error-message").innerHTML=errorMessage
    }
    else{
      console.log(name,phone,category,date,count,message)
    }
  })

