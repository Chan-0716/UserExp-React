import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.USER_VITE_API_URL,
});

export default api;

export const signUpWithEmail = async (data: any) => {
  try {
    const response = await api.post(`/api/user/signUp`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const signUpWithMobile = async (data: any) => {
  try {
    const response = await api.post(`/api/user/signup`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const sendOtp = async (mobileNo: string) => {
  try {
    const response = await api.post(`/api/user/sendOtp`, { mobileNo });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "OTP sending failed" };
  }
};

export const verifyOtp = async (mobileNo: string, otpCode: string) => {
  try {
    const response = await api.post(`/api/user/verifyOtp`, {
      mobileNo,
      otpCode,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "OTP verification failed" };
  }
};

export const loginWithEmail = async (email: string, password: string) => {
  try {
    const response = await api.post(`/api/user/signIn`, { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Login failed" };
  }
};

export const loginWithMobile = async (mobileNo: string, otpCode: string) => {
  try {
    const response = await api.post(`/api/user/signIn`, { mobileNo, otpCode });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Login failed" };
  }
};

export const updateUserProfile = async (
  userId: string,
  data: any
) => {
  try {
    const response = await api.post(
      `/api/user/updateUserProfile`,
      data,
      {
        params: {
          userId,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    throw error.response?.data || {
      message: "Edit user profile failed",
    };
  }
};