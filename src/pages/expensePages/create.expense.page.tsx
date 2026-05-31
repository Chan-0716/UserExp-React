import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  addExpense,
  fetchCategories,
  fetchSubCategories,
} from "../../services/expense/expense";

import { expenseStyles } from "../../styles/expense/expense";

function AddExpense() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<any[]>([]);
  const [subCategories, setSubCategories] = useState<any[]>([]);

  const [form, setForm] = useState({
    categoryId: 0,
    subCategoryId: 0,
    amount: 0,
    description: "",
    paymentMethod: "upi",
  });

  const [loading, setLoading] = useState(false);

  // Fetch categories on page load
  useEffect(() => {
    getCategories();
  }, []);

  // Get Categories
  const getCategories = async () => {
    try {
      const userStr = localStorage.getItem("user");

      if (!userStr) return;

      const user = JSON.parse(userStr);

      const response = await fetchCategories(user.userId);
      console.log(response, "category");
      
      setCategories(response || []);
    } catch (error) {
      console.log("Category Fetch Error:", error);
    }
  };

  // Get SubCategories
  const getSubCategories = async (categoryId: number) => {
    try {
      const response = await fetchSubCategories(categoryId);
      console.log(response, "subCategory");

      setSubCategories(response || []);
    } catch (error) {
      console.log("SubCategory Fetch Error:", error);
    }
  };

  // Handle Input Change
  const handleChange = async (e: any) => {
    const { name, value } = e.target;

    let updatedValue: any = value;

    // Convert numeric fields
    if (name === "categoryId" || name === "subCategoryId") {
      updatedValue = parseInt(value);
    }

    if (name === "amount") {
      updatedValue = parseFloat(value);
    }

    // Update form
    setForm((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    // Fetch subcategories based on category
    if (name === "categoryId") {
      await getSubCategories(parseInt(value));

      setForm((prev) => ({
        ...prev,
        categoryId: parseInt(value),
        subCategoryId: 0,
      }));
    }
  };

  // Submit Expense
  const handleSubmit = async () => {
    setLoading(true);

    try {
      const userStr = localStorage.getItem("user");

      if (!userStr) {
        throw new Error("User not logged in");
      }

      const user = JSON.parse(userStr);

      const result = await addExpense(form, user.userId);

      console.log(result);

      alert("Expense created successfully!");

      navigate("/expenseDashboard");
    } catch (err: any) {
      alert(err.message || "Failed to create expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={expenseStyles.container}>
      <div style={expenseStyles.card}>
        <h2 style={expenseStyles.title}>Create Expense</h2>

        {/* Category Dropdown */}
        <select
          style={expenseStyles.input}
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
        >
          <option value={0}>Select Category</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {/* SubCategory Dropdown */}
        <select
          style={expenseStyles.input}
          name="subCategoryId"
          value={form.subCategoryId}
          onChange={handleChange}
        >
          <option value={0}>Select SubCategory</option>

          {subCategories.map((subCategory) => (
            <option key={subCategory.id} value={subCategory.id}>
              {subCategory.name}
            </option>
          ))}
        </select>

        {/* Amount */}
        <input
          style={expenseStyles.input}
          type="number"
          step="0.01"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
        />

        {/* Description */}
        <input
          style={expenseStyles.input}
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        {/* Payment Method */}
        <select
          style={expenseStyles.input}
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={handleChange}
        >
          <option value="">Select Payment Method</option>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="upi">UPI</option>
          <option value="wallet">Wallet</option>
        </select>

        {/* Submit Button */}
        <button
          style={expenseStyles.button}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Expense"}
        </button>
      </div>
    </div>
  );
}

export default AddExpense;
