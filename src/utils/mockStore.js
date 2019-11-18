const mockLoginData = {
  errorResponse: {
    message: 'Login failed',
  },
  successResponse: {
    status: 'success',
    data: {
      status: 200,
      message: 'You have successfully logged in',
    },
  },
  loginData: {
    email: 'john.doe@gmail.com',
    password: 'password',
  },
};

export default mockLoginData;
