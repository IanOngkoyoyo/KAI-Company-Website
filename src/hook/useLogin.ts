import { axiosInstance } from './axiosInstance';
import bcrypt from 'bcryptjs';

export type TRegister = {
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
};

export type TLogin = {
  username: string;
  password: string;
};

export const useRegister = async ({
  email,
  username,
  password,
  phoneNumber,
}: TRegister) => {
  const response = await axiosInstance.get("/User", {
    params: {
      where: `username = '${username.replace(/'/g, "\\'")}'`,
    },
  });

  const user = response.data?.[0];

  if (user) {
    throw new Error("Username sudah terdaftar");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  return await axiosInstance.post("/User", {
    email,
    username,
    password: hashPassword,
    phoneNumber,
  });
};

export const useLogin = async ({ username, password }: TLogin) => {
  const response = await axiosInstance.get('/User', {
    params: {
      where: `username='${username}'`,
    },
  });

  const user = response.data?.[0];
  if (!user) {
    throw new Error('Username atau password salah');
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error('Username atau password salah');
  }

  localStorage.setItem('username', user.username);
  window.location.href = '/BlogList'
  return {
    username: user.username,
    email: user.email,
  };
};
