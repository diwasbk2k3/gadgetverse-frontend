import React from "react";

function EditForm({ editProduct, setEditProduct, handleSave }) {
  return (
    <form onSubmit={handleSave} className="space-y-4 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold">Edit Product</h3>

      {/* Product Name */}
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          value={editProduct.name}
          onChange={(e) =>
            setEditProduct({ ...editProduct, name: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Product Price */}
      <div>
        <label htmlFor="price" className="block text-gray-700 font-medium mb-1">
          Product Price
        </label>
        <input
          type="text"
          id="price"
          value={editProduct.price}
          onChange={(e) =>
            setEditProduct({ ...editProduct, price: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      
      {/* Product Image */}
      <div>
        <label htmlFor="image_path" className="block text-gray-700 font-medium mb-1">
          Product Image
        </label>
        <input
          type="file"
          id="image_path"
          onChange={(e) => 
            setEditProduct({ ...editProduct, image_path: e.target.files[0] })
          }
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Product Category */}
      <div>
        <label htmlFor="category" className="block text-gray-700 font-medium mb-1">
          Product Category
        </label>
        <select
          id="category"
          value={editProduct.category}
          onChange={(e) =>
            setEditProduct({ ...editProduct, category: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        >
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="smartwatch">Smartwatch</option>
          <option value="drone">Drone</option>
          <option value="camera">Camera</option>
          <option value="others">Others</option>
        </select>
      </div>

      {/* Product Description */}
      <div>
        <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
          Product Description
        </label>
        <textarea
          id="description"
          value={editProduct.description}
          onChange={(e) =>
            setEditProduct({ ...editProduct, description: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        ></textarea>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setEditProduct(null)}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditForm;