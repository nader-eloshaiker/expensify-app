//* takes all named exports and wraps them into an object as firebase
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDUrRUM3Xh-8RdSKPifaHuteuZx9NXV6hY",
    authDomain: "expensify-app-b46bc.firebaseapp.com",
    databaseURL: "https://expensify-app-b46bc.firebaseio.com",
    projectId: "expensify-app-b46bc",
    storageBucket: "expensify-app-b46bc.appspot.com",
    messagingSenderId: "137428686690"
};

firebase.initializeApp(config);
const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


// Change detection
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//
//     console.log(expenses);
// }, (e) => {
//     console.log('error: ', e);
// });


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//
//         console.log(expenses);
//     });


// add array based data


// database.ref('expenses').push({
//     description: 'rent',
//     note: 'november rent',
//     amount: 140000,
//     createdAt: moment().valueOf()
// });
//
// database.ref('expenses').push({
//     description: 'power bill',
//     note: 'november power',
//     amount: 40000,
//     createdAt: moment().valueOf()
// });
//
// database.ref('expenses').push({
//     description: 'groceries',
//     note: 'weekly shopping',
//     amount: 23000,
//     createdAt: moment().valueOf()
// });


// database.ref('notes').push({
//     title: 'Section 2',
//     body: 'This is another body'
// });

// database.ref('notes/-Kz1scgSfUe1DJf-s7J1').update({
//     body: 'this is a better note'
// });


// const firebaseNotes = {
//     notes: {
//         werwer: {
//             title: 'Section 1',
//             body: 'This is a body'
//         },
//         sdfsf: {
//             title: 'Section 2',
//             body: 'This is another body'
//         },
//         ghjghj: {
//             title: 'Section 3',
//             body: 'This is yet another body'
//         }
//     }
// };
//
// const notes = [
//     {
//         id: '12',
//         title: 'Section 1',
//         body: 'This is a body'
//     }, {
//         id: '13',
//         title: 'Section 2',
//         body: 'This is another body'
//     }, {
//         id: '14',
//         title: 'Section 3',
//         body: 'This is yet another body'
//     }
//     ];
//
// database.ref('notes').set(notes);


// Read Data


// This will run everytime the data changes, cannot use promise as resolve only happens once, therefore callback is used
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error: ', e);
// });
//
// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3000);
//
// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 6000);
//
// setTimeout(() => {
//     database.ref('age').set(30);
// }, 9000);


// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//
//     });


// Set Data


// database.ref().set({
//     name: 'Nader Eloshaiker',
//     age: 44,
//     stressLevel: 6,
//     job: {
//         title: 'software engineer',
//         company: 'google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Chelsea',
//         country: 'Australia'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('error: ', error);
// });


// Update Data


// database.ref().set('This is my data');

// database.ref('age').set(45);
// database.ref('location/city').set('Melbourne');

// database.ref('attributes').set({
//     weight: '70kg',
//     height: '173cm'
// }).then(() => {
//     console.log('database write successful');
// }).catch((e) => {
//     console.log('error: ', e)
// });

// database.ref().update({
//     name: 'Raya Eloshaiker',
//     age: 8,
//     stressLevel: 9,
//     'job/company': 'amazon',      // creating a new value
//     isSingle: null,               // deleting value
//     'location/city': 'home'   // object path update, passing an object will clobber object
// });


// Remove Data


// database.ref('isSingle')
//     .set(null)
//     .then(() => {
//         console.log('deleted');
//     }).catch((e) => {
//     console.log('deletion failed: ', e);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('deleted');
//     }).catch((e) => {
//     console.log('deletion failed: ', e);
// });
