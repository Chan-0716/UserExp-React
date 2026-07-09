import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_EXPENSE_API_URL,
});
export default api;

type ExpenseData = {
  categoryId: number;
  subCategoryId: number;
  amount: number;
  description: string;
};

type BudgetData = {
  month: number;
  year: number;
  budgetAmount: number;
};

export const getExpenses = async (userId: string,
  month: number,
  year: number, page: number) => {
  const response = await api.get(`/api/expense/expenseDashboard`, 
    {
      params: {
      userId,
      month,
      year,
      page
    },
    });
  return response.data;
};

export const addExpense = async (expenseData: ExpenseData, userId: string) => {
  const response = await api.post(`/api/expense/createExpense`, 
    expenseData,
    {
      params: {
      userId    
    },
    });
  return response.data;
};

export const fetchCategories = async (userId: string) => {
  const response = await api.get(`/api/expense/getAllCategories`, {
    params: {
      userId
    }
  });
  return response.data;
};

export const fetchSubCategories = async (categoryId: number) => {
  const response = await api.get(`/api/expense/getSubCategories`, {
    params: {
      categoryId
    }
  });
  return response.data;
};

export const createBudget = async (userId: string, budgetDate: BudgetData) => {
  const response = await api.post(`/api/expense/createBudget`, 
    budgetDate,
    {
      params: {
      userId    
    },
    });
  return response.data;
};

export const fetchExpenseReport = async (userId: string, month: number, year: number) => {
  const response = await api.get(`/api/expense/expenseReport`,
    {
      params: {
        userId,
        month,
        year
      }
    }
  )
  return response;
}