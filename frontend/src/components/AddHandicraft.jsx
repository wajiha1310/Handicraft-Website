import {useFormik} from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import * as Yup from 'yup';

const AddHandicraftSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5,'Too Short!').required('Required')
  .matches(/[0-9]/,'Number is required')
  .matches(/[a-z]/, 'Lowercase letter is required')
  .matches(/[A-Z]/, 'Uppercase letter is required')
  .matches(/[^\w]/, 'Special character is required'),
  confirm: Yup.string().oneOf([Yup.ref('password'),null],'passwod does not match').required('Required')
});

const AddHandicraft = () => {
  const AddHandicraftForm = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      confirm:''
    },
    onSubmit: async (values) => {
      console.log(values);

      

      const response = await fetch('http://localhost:5000/user/add',{
        method:'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type':'application/json'
        }

      });
      // successful- (200-299),redirection-(300-399), client side error-(400-499), server error-(500-599) 

      console.log(response.status);
      console.log(response.statusText);

      if(response.status === 200){
        enqueueSnackbar('Register successfully',{variant:'success'});
      }else {
        enqueueSnackbar('something went wrong',{variant:'error'});
      }

     
    },
    validationSchema: AddHandicraftSchema
  });
  return (
    <div> <section  style={{ backgroundColor: "pink" }}>
    <div className="container h-80">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col-lg-12 col-xl-11 mt-5 mb-5">
          <div className="card text-black" style={{ borderRadius: 25 }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"  style={{ color: "#fd0754" }}>
                    Sign up
                  </p>
                  <form className="mx-1 mx-md-4" onSubmit={AddHandicraftForm.handleSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                      <label htmlFor="name">Name</label>
                       <span className='text-danger ms-3'>{AddHandicraftForm.touched.name && AddHandicraftForm .errors.name}</span>
                       <input type="text" id='name' onChange={AddHandicraftForm.handleChange} value={AddHandicraftForm.values.name} className='form-control mb-4' />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                      <label htmlFor="email">Email Address</label>
                      <span className='text-danger ms-3'>{AddHandicraftForm.touched.email && AddHandicraftForm.errors.email}</span>
                      <input type="text" id='email' onChange={AddHandicraftForm.handleChange} value={AddHandicraftForm.values.email} className='form-control mb-4' />
  
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                      <label htmlFor="password">Password</label>
                      <span className='text-danger ms-3'>{AddHandicraftForm.touched.password && AddHandicraftForm.errors.password}</span>
                      <input type="password" id='password' onChange={AddHandicraftForm.handleChange} value={AddHandicraftForm.values.password} className='form-control mb-4' />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                      <label htmlFor="confirm"> ConfirmPassword</label>
                      <span className='text-danger ms-3'>{AddHandicraftForm.touched.confirm && AddHandicraftForm.errors.confirm}</span>
                      <input type="password" id='confirm' onChange={AddHandicraftForm.handleChange} value={AddHandicraftForm.values.confirm} className='form-control mb-4' />
  
                      </div>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3c"
                      />
                      <label className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in{" "}
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-danger btn-lg">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                   <img
                    src="https://i.pinimg.com/736x/0e/5c/4c/0e5c4c51aa9d4d6aaf4a12921be6c565.jpg"
                    className="img-fluid"
                    alt="Sample image"
                  /> 
                  
  
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default AddHandicraft;