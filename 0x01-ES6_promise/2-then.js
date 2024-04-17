/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return promise
    .then((reponse) => ({
      status: 200,
      body: 'success',
    }
    ))
    .catch((error) => Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
