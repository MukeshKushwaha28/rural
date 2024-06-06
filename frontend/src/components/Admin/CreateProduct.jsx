import React, { useState, useEffect } from "react";
// import Layout from "./../../components/Layout/Layout";
// import AdminMenu from "./../../components/Layout/AdminMenu";

// import toast from "react-hot-toast";
import AdminMenu from "./AdminMenu";
import axios from "axios";
// import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
// const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("district", district);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.post(
        "http://localhost:8080/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        // toast.error(data?.message);
        // navigate("/dashboard/admin/products")
        console.log("sita");
      } else {
        // toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
        // navigate("/")
        console.log("ram");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-75">
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                {/* <textarea
                  type="text"
                  value={district}
                  placeholder="write a district"
                  className="form-control"
                  onChange={(e) => setDistrict(e.target.value)}
                /> */}

                <select
                  id="mySelect"
                  className="form-control "
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  style={{ width: "100%", border: "1px solid grey" }}
                  class="select"
                >
                  <option value="district">---Select Distict---</option>
                  <option value="Agra">Agra</option>
                  <option value="Amroha">Amroha</option>
                  <option value="Bijnor">Bijnor</option>
                  <option value="Gorakhpur">Gorakhpur</option>
                  <option value="Maharajganj">Maharajganj</option>
                </select>
              </div>

              <div className="mb-3">
                {/* <textarea
                  type="text"
                  value={category}
                  placeholder="write a category"
                  className="form-control"
                  onChange={(e) => setCategory(e.target.value)}
                /> */}

                <select
                  id="mySelect"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select"
                  style={{ width: "100%", border: "1px solid black" }}
                >
                  <option value="select">---Select Catagory---</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Painter">Painter</option>
                  <option value="AC/fridge repair">AC/fridge repair</option>
                  <option value="Cleaner">Cleaner</option>
                  <option value="Carpenter">Carpenter</option>
                </select>
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
