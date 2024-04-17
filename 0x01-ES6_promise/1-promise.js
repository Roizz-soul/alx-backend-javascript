/* eslint-disable no-unused-vars */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const data = {
      status: 200,
      body: 'Success',
    };
    const error = new Error('The fake API is not working currently');

    if (success === true) {
      resolve(data);
    } else {
      reject(error);
    }
  });
}
