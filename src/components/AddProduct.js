import "../components/AddProduct.css";
import app_config from "../config";
import { useState } from "react";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik } from "formik";

    function AddProduct({ setOpenAddPlatform }) {
        const url = app_config.api_url;
        const [image, setImage] = useState("");
        const [ProdFile, setProdFile] = useState("");
        const navigate = useNavigate();
   
 
   const productform = {
    prodname: String,
    image: String,
    description: String,
    price: String,
    rating: String   

   };
   const formSubmit = (values) => {
    console.log(values);
    values.heroimage = image;
    values.file = ProdFile;

    const reqOp = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    fetch(url + "product/add", reqOp)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message == "success") {
          Swal.fire({
            icon: "success",
            title: "Added Successfully!!",
          });
        }
      });
  };

  const uploadheroimage = (event) => {
    const formdata = new FormData();
    formdata.append("file", event.target.files[0]);

    const reqOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(url + "util/addfile", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImage(event.target.files[0].name);
      });
  };

  const uploadfile = (event) => {
    const formdata = new FormData();
    formdata.append("file", event.target.files[0]);

    const reqOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(url + "util/createfile", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProdFile(event.target.files[0].name);
      });
  };
    return (
                  
<>
  <div className="container">
    <section className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Add Product</h3>
      </div>
      <div className="panel-body">
      <Formik initialValues={productform} onSubmit={formSubmit}>
                 {({ values, handleChange, handleSubmit }) => (
                   <form onSubmit={handleSubmit}  action="designer-finish.html"
                   className="form-horizontal"
                   role="form">
        
          
          {/* form-group // */}
          <div className="form-group">
            <label htmlFor="name" className="col-sm-3 control-label">
              Product Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control" 
                id="prodname"
                placeholder="Product Name"
                onChange={handleChange}
                  value={values.prodname}
              />
            </div>
          </div>{" "}
          {/* form-group // */}
          <div className="form-group">
            <label htmlFor="name" className="col-sm-3 control-label">
              Price
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Price"
                onChange={handleChange}
                  value={values.price}
              />
            </div>
          </div>{" "}
          {/* form-group // */}
          <div className="form-group">
            <label htmlFor="about" className="col-sm-3 control-label">
              Description
            </label>
            <div className="col-sm-9">
              <textarea id="description" type="text"className="form-control" defaultValue={""}onChange={handleChange}
                  value={values.description} />
              
            </div>
          </div>{" "}
          {/* form-group // */}
          <input
              
              onChange={uploadheroimage}
              type="file"
              fullwidth
              className="form-control mt-4 mx-0"
              title="Select heroimage"
            required/>
          {/* form-group // */}
          <hr />
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>{" "}
          {/* form-group // */}
          </form>
                 )}
                 </Formik>
      </div>
      {/* panel-body // */}
    </section>
    {/* panel// */}
  </div>{" "}
  {/* container// */}
</>

    )
}
export default AddProduct;