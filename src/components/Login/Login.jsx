import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { TokenContext } from "../../Context/TokenContext";


export default function Login() {

  const [apiError, setApiError] = useState(null);

  let { setToken } = useContext(TokenContext);

  let navigate = useNavigate();

  const initialvalue = {
    email: "malak@gmail.com",
    password: "Aasd",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required("requierd"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{3,8}/, "invalid password")
      .required("requierd"),
  });

  //call api function
  async function login(values) {
    //send data to server
    try {
      setApiError(null);
      let { data } = await axios.post(
        "http://localhost:3000/auth/login",
        values
      );
      console.log(data);
      if (data.message == "Welcome to saraha app") {
        localStorage.setItem("userToken",data.token)
        setToken(data.token);
        navigate("/home");
      }
    } catch (error) {
      setApiError(error.response.data.message);
    }
  }

  let loginForm = useFormik({
    initialValues: initialvalue,
    validationSchema,
    onSubmit: login,
  });

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="my-5">Sign In :</h1>

          {apiError ? (
            <div className="alert alert-danger" role="alert">
              {apiError}
            </div>
          ) : null}

          <form onSubmit={loginForm.handleSubmit}>
            <div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={loginForm.values.email}
                  onChange={loginForm.handleChange}
                  onBlur={loginForm.handleBlur}
                />
                <label htmlFor="email" className="text-secondary">
                  Email
                </label>

                {loginForm.errors.email && loginForm.touched.email ? (
                  <div className="alert alert-danger" role="alert">
                    {loginForm.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  name="password"
                  value={loginForm.values.password}
                  onChange={loginForm.handleChange}
                  onBlur={loginForm.handleBlur}
                />
                <label htmlFor="password" className="text-secondary">
                  Password
                </label>

                {loginForm.errors.password &&
                loginForm.touched.password ? (
                  <div className="alert alert-danger" role="alert">
                    {loginForm.errors.password}
                  </div>
                ) : null}
              </div>

              <button className="btn btn-outline-light"> Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
