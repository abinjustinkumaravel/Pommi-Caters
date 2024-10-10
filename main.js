import {initializeApp} from "firebase/app"
import {getFirestore, collection, addDoc} from "firebase/firestore"
import { Timestamp } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: env.VITE_API_KEY,
    authDomain: env.VITE_AUTH_DOMAIN,
    projectId: env.VITE_PROJECT_ID,
    storageBucket: env.VITE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
    appId: env.VITE_APP_ID,
    measurementId: env.VITE_MEASUREMENT_ID
  };


  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const form =document.getElementById("orderDetails")
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const category = document.getElementById('category').value;
    const date = new Date(document.getElementById('date').value);
    const count = document.getElementById('count').value;
    const message =document.getElementById('message').value;

    let errorMessage;

    if (!name || !phone || !category || !date || !count || !message){

      errorMessage ="All fields are required";
      document.getElementById('error-message'),innerHTML=errorMessage;
    }


    if (phone.length!=10 || isNaN(phone)){
        errorMessage="Invalid Phonenumber"
        document.getElementById("error-message").innerHTML=errorMessage
    }
    else{
      // console.log(date)
      try {
        await addDoc(collection(db,"Order Details"),{
          name:name,
          phonenumber:Number(phone),
          category:category,
          date:date,
          count:Number(count),
          message: message
        });
        alert("Order Booked Successfully, Our Team Will contact you with in 24 Hours")
        form.reset()
      }
      catch (error){
        console.error("Error in Booking order")
        document.getElementById("error-message").innerHTML = "Failed to submit the order. Please try again.";
      }
    }
  });

