import AxiosInstance from '../utils/AxiosIntance';

export const register = async (email, name, password) => {
  const data = {email: email, name: name, password: password};
  console.log(email,name,password)
  const result = await AxiosInstance().post('/user/register', data);
  return result;
}
export const login = async (email, password) => {
  const data = {email: email, password: password};
  const result = await AxiosInstance().post('/user/login', data);
  return result;
}
