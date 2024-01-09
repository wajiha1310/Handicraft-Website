import React from 'react'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';

// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

const Login = () => {
  // const navigate= useNavigate();
  // const {setLoggedIn} =useAppContext();

  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values, { resetForm }) => {
      // alert(JSON.stringify(values));
      console.log(values);
  
      // send request to backend/REST API
  const response = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
  });
  
      console.log(response.status);
      console.log(response.statusText);
  
      if (response.status === 200) {
        enqueueSnackbar('Loggedin Successfully', { variant: 'success' });
  
        const data= await response.json();
        console.log(data);
        //to uave user data  in session ,inbuilt api- sessionstorage
        sessionStorage.setItem('user',JSON.stringify(data));
  
        //to navigate to this page
        setLoggedIn(true);
        navigate('/addhandicraft')
      } else if (response.status === 401) {
        enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
      }else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }
  
      // resetForm();
      // toast.success('Form Submitted Successfully');
  
      //http request are stateless
    },
    validationSchema: LoginSchema
  });

  return (
    <div><section className="h-100 gradient-form" style={{ backgroundColor: "rgb(241 12 89 / 72%)" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsckO1WoyWFWddIsq6B-9fcowHO3cEbO6XNvxUJOoDn5wM7dxO9qOkjdeXZA4x_pDxeu8&usqp=CAU"
                      style={{ width: 185 }}
                      alt="logo"
                    />
                    <h4 className="mt-2 mb-5 pb-2">Handmade Wonders </h4>
                  </div>
                  <form onSubmit={loginForm.handleSubmit}>
                    <p>Please login to your account</p>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        value={loginForm.values.email}
                        onChange={loginForm.handleChange}
                        className="form-control"
                        placeholder="Phone number or email address"
                      />
                      <label className="form-label" htmlFor="form2Example11">
                        Username
                      </label>
                      <span className="text-danger">{loginForm.errors.email}</span>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        value={loginForm.values.password}
                        onChange={loginForm.handleChange}
                        className="form-control"
                      />
                    
                  
                      <label className="form-label" htmlFor="form2Example22">
                        Password
                      </label>
                      <span className='text-danger ms-3'>{loginForm.touched.password && loginForm.errors.password}</span>
                
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        type="submit"
                      >
                        Log in
                      </button>
                      <a className="text-muted" href="#!">
                        Forgot password?
                      </a>
                    </div>
                    {/* <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button type="button" className="btn btn-outline-danger">
                        Create new
                      </button>
                    </div> */}
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">We are more than just a company</h4>
                  <p className="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   
  </div>
  )
}

export default Login 

