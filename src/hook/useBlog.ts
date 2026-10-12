'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { axiosInstance } from './axiosInstance';

type TBlog = {
  Title: string;
  Description: string;
  createdBy?: string;
};

export const GetBlog = () => {
  const [blog, setBlog] = useState<TBlog[]>([]);
  const getBlog = async () => {
    try {
      const res = await axiosInstance.get('/Blog');
      setBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    getBlog();
  }, []);

  return {
    blog,
    getBlog,
  };
};

export const CreateBlog = async ({ Title, Description }: TBlog) => {
  const getUsername = localStorage.getItem('username');
  return await axiosInstance.post('/Blog', {
    Title,
    Description,
    createdBy: getUsername
  });
};
