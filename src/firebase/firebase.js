import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     })
//   });
  
//   console.log(expenses);
//  });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       })
//     });

//     console.log(expenses);
//   });


// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 343993434
// });
// database.ref('expenses').push({
//   description: 'Phone Bill',
//   note: '',
//   amount: 4000,
//   createdAt: 24392095
// });
// database.ref('expenses').push({
//   description: 'Pokemon',
//   note: '',
//   amount: 19500,
//   createdAt: 294032905
// })

// database.ref('notes/-LgjBtDftCWFtQZL-o1M').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     ljkaf: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     ljkgads: {
//       title: 'Second note',
//     body: 'This is my other note'
//     }
//   }
// }

// const notes = [
//   {
//     id: 12,
//     title: 'First note',
//     body: 'This is my note'
//   },
//   {
//     id: '4nadf',
//     title: 'Second note',
//     body: 'This is my other note'
//   }
// ];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const { name, job: { company, title} } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company}`)
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error', e);
// });

// setTimeout(() => {
//   database.ref('age').set(27);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Josh Todd',
//   age: 26,
//   location: {
//     city: 'Regina',
//     country: 'Canada'
//   },
//   job: {
//     title: 'Developer',
//     company: 'Google',
//   },
//   stress: 6
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => console.log('This failed', error));


// database.ref().update({
//   stress: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Toronto'
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => console.log('data was removed'))
//   .catch((error) => console.log('failed to remove', error));
