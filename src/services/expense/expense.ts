import axios from "axios";

export const getExpenseData = async (userId: string,
  month: number,
  year: number) => {
  const response = await axios.get("api/expense/expenseDashboard", 
    {
      params: {
      userId,
      month,
      year,
    },
    });
  return response.data;
};