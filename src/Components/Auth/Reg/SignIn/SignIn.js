import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import './SignIn.css'
import Error from '../Error'
import { withRouter } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email address')
        .max(30, 'Must be shorter than 255')
        .required('required'),
    password: Yup.string()
        .min(6, 'Must be more than 6 letters')
        .required('required'),
    name: Yup.string()
        .required('required'),
    avatar: Yup.string()
        .required('required')
})

class SignIN extends React.Component {
    state = {
        rot: false,
        error: null,
    }

    // fetch part
    signUp = async (values) => {
        try {
            const data = await fetch('https://nameless-stream-58853.herokuapp.com/user/auth/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
            const fetchedData = await data.json()
            console.log(fetchedData);
            this.props.history.push("/") //with rout

            if (fetchedData.message) {
                this.setState({ error: fetchedData.message })
            }
        } catch (error) {
            this.setState({ error: "Try again" })
            
        }
    }

    render() {
        return (
            <div
                className={this.state.rot ? ['flip-card-inner', 'rot'].join(' ') : "flip-card-inner"}>
                <div className="flip-card-front">
                    <div className="signupSection">
                        <div className="info">
                            <h2 className="h2">Stand by for rational and biometric scan</h2>

                            <p className="sign">For the next Tony Stark, I trust you</p>

                            <img alt="G" className='scan' src="https://i.pinimg.com/originals/12/e8/a6/12e8a6a547e317524121f7a5d6084036.gif" />

                        </div>


                        <Formik
                            initialValues={{ email: '', password: '', name: '', avatar: '' }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                setSubmitting(true)
                                this.signUp(values)
                                resetForm()
                                setSubmitting(false)

                            }}>
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit }) => (
                                    <form
                                        className="modal-content"
                                        onSubmit={handleSubmit}>
                                        <h2 className="h2">{this.state.rot ? 'SignIn' : "SignUp"} </h2>
                                        <div className="container">

                                            <label htmlFor="firstanme"></label>
                                            <input
                                                id="text"
                                                type="text"
                                                placeholder="Enter first name"
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                className={touched.name && errors.name ? 'has-error' : null} />
                                            <Error touched={touched.name} message={errors.name} />

                                            <label htmlFor="lasttanme"></label>
                                            <input
                                                id="text"
                                                type="text"
                                                placeholder="Enter avatar url"
                                                name="avatar"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.avatar}
                                                className={touched.avatar && errors.avatar ? 'has-error' : null} />
                                            <Error touched={touched.avatar} message={errors.avatar} />

                                            <label htmlFor="email"></label>
                                            <input
                                                id="text"
                                                type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                className={touched.email && errors.email ? 'has-error' : null} />
                                            <Error touched={touched.email} message={errors.email} />
                                            <label htmlFor="password"></label>
                                            <input
                                                type="password"
                                                placeholder="Enter Password"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                className={touched.password && errors.password ? 'has-error' : null} />
                                            <Error touched={touched.password} message={errors.password} />

                                            <button type="submit"> Join </button>
                                        </div>
                                    </form>
                                )}

                        </Formik>



                    </div>

                </div>
                {/* {this.state.error ? <p style="color:red">{this.state.error}</p> : null} */}
            </div>
        );
    }
}

export default withRouter(SignIN);
