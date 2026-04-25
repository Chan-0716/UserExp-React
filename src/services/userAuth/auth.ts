import axios from "axios";

export const signUpWithEmail = async (data: any) => {
  try {
    const response = await axios.post(`api/user/signUp`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const signUpWithMobile = async (data: any) => {
  try {
    const response = await axios.post(`api/user/signup`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const sendOtp = async (mobileNo: string) => {
  try {
    const response = await axios.post(`api/user/sendOtp`, { mobileNo });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "OTP sending failed" };
  }
};

export const verifyOtp = async (mobileNo: string, otpCode: string) => {
  try {
    const response = await axios.post(`api/user/verifyOtp`, { mobileNo, otpCode });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "OTP verification failed" };
  }
};

export const loginWithEmail = async (email: string, password: string) => {
  try {
    const response = await axios.post("api/user/signIn", { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Login failed" };
  }
};

export const loginWithMobile = async (mobileNo: string, otpCode: string) => {
  try {
    const response = await axios.post("api/user/signIn", { mobileNo, otpCode });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Login failed" };
  }
};