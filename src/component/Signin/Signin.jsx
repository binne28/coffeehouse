import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import * as Yup from 'yup';
import API__URL from '../../config';
import Loading from '../Loading/loading';

const signin = async (values) => {
  const response = await axios.post(`${API__URL}/auth/login`, values, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error('Đăng nhập không thành công');
  }
};

function Signin({setTypeAcc}) {
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation({
    //gửi yêu cầu đăng nhập
    mutationFn: signin,

    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.tokens.accessToken);
      localStorage.setItem('username', data.user.username);
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      setIsLoading(true);
    
      setTimeout(() => {
        setIsLoading(false);
        if (data.user.username === "Admin") {
          setTypeAcc('admin');
        } else {
          setTypeAcc('user')
        }
      }, 1500);
    },
    

    onError: (error) => {
      setIsLoading(false);
      if (error.response) {
        if (error.response.status === 401) {
          console.log('Thông tin đăng nhập không hợp lệ. Vui lòng kiểm tra lại username và password');
        } else {
          console.log(`Lỗi: ${error.response.statusText}`);
        }
      } else {
        console.log('Không thể kết nối tới server. Vui lòng thử lại sau.');
      }
    },
  });

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Vui lòng nhập username'),
    password: Yup.string().required('Vui lòng nhập mật khẩu'),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-[2.4rem]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign in to your account</h1>

        {isLoading ? (
          <Loading />
        ) : (
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              await mutation.mutateAsync(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                    Username
                  </label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    className={`w-full p-3 border ${errors.username && touched.username
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-green-500'
                      } rounded-lg focus:outline-none focus:ring-2`}
                  />
                  {errors.username && touched.username && (
                    <p className="text-red-500 text-sm mt-2">{errors.username}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className={`w-full p-3 border ${errors.password && touched.password
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-green-500'
                      } rounded-lg focus:outline-none focus:ring-2`}
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-500 text-sm mt-2">{errors.password}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  {mutation.isPending ? 'Signing in...' : 'Sign in'}
                </button>
              </Form>
            )}
          </Formik>
        )}

        <p className="mt-4 text-center text-gray-600">
          No account?{' '}
          <Link to="/dang-ky">
            <span className="text-blue-500 hover:underline">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
