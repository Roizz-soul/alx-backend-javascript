/* eslint-disable import/extensions */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];
  try {
    const result = await signUpUser(firstName, lastName);
    res.push({ status: 'fulfilled', value: result });
    await uploadPhoto(fileName);
  } catch (err) {
    res.push({
      status: 'rejected',
      value: `${err}`,
    });
  }
  return res;
}
