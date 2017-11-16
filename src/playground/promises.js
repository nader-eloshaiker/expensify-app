const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ message: 'this is my resolved data', name: 'Nader Eloshaiker'});
        // reject('something went wrong');
    }, 3000);
});

console.log('before');

promise
    .then((data) => {
         console.log('1', data);

         return new Promise((resolve) => {
             setTimeout(() => {
                 resolve('this is my chained resolved data');
             }, 3000);
         });
    }).then((chainData) => {
        console.log('promise chain: ', chainData);
    }).catch((error) => {
    console.log('error: ', error);
});

console.log('after');
