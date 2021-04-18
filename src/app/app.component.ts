import { Component } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBp1q_EnHtFV0NoJQPhHyR6gh4vQ5yRErE",
      authDomain: "projet-bibliotheque-k.firebaseapp.com",
      projectId: "projet-bibliotheque-k",
      storageBucket: "projet-bibliotheque-k.appspot.com",
      messagingSenderId: "72852524083",
      appId: "1:72852524083:web:7d7b09eedf57901517a746"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
