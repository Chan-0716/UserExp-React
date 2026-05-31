import axios from "axios";

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
  const response = await axios.get("api/expense/expenseDashboard", 
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
  const response = await axios.post("api/expense/createExpense", 
    expenseData,
    {
      params: {
      userId    
    },
    });
  return response.data;
};

export const fetchCategories = async (userId: string) => {
  const response = await axios.get("api/expense/getAllCategories", {
    params: {
      userId
    }
  });
  return response.data;
};

export const fetchSubCategories = async (categoryId: number) => {
  const response = await axios.get(`api/expense/getSubCategories`, {
    params: {
      categoryId
    }
  });
  return response.data;
};

export const createBudget = async (userId: string, budgetDate: BudgetData) => {
  const response = await axios.post("api/expense/createBudget", 
    budgetDate,
    {
      params: {
      userId    
    },
    });
  return response.data;
};