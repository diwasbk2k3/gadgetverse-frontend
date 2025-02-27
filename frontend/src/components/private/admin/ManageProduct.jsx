import React, { useEffect, useState } from "react";
import axios from "axios";
import EditForm from "./EditForm"; 
import { toast } from "react-toastify";

function ManageProduct() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); 

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        toast.error("Failed to fetch products:");
      }
    };

    fetchProducts();
  }, []);

  // Delete functionality
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      toast.success("Product deleted successfully!");
      setProducts(products.filter((product) => product.product_id !== productId));
    } catch (err) {
      console.error("Failed to delete product:", err);
      toast.error("Failed to delete product.");
    }
  };

  // Save
  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", editProduct.name);
    formData.append("price", editProduct.price);
    formData.append("category", editProduct.category);
    formData.append("description", editProduct.description);
    // Only append the file if it exists
    if (editProduct.image_path) {
      formData.append("productImage", editProduct.image_path);
    }
    try {
      const response = await axios.put(
        `http://localhost:5000/products/${editProduct.product_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Product updated successfully!");
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.product_id === editProduct.product_id
            ? { ...product, ...response.data } // Merge updated data
            : product
        )
      );      
      setEditProduct(null); // Close the edit form
    } catch (err) {
      console.error("Failed to update product:", err);
      toast.error("Failed to update product.");
    }
  };
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Products</h2>

      {/* Show edit form if a product is being edited */}
      {editProduct && (
        <EditForm
          editProduct={editProduct} // Pass the product being edited
          setEditProduct={setEditProduct} // Pass state updater for closing the form
          handleSave={handleSave} // Pass save handler
        />
      )}
      <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 mt-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">SN.</th>
            <th className="border border-gray-300 px-4 py-2">Product ID</th>
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Edit</th>
            <th className="border border-gray-300 px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product.product_id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{product.product_id}</td>
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => setEditProduct(product)} // Open edit form with the selected product
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(product.product_id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default ManageProduct;