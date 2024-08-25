import './feedback.css';
import doubleArrow from '../../assets/doubleArrow.png';;
import {useFormik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {TOAST_CONFIGURATION} from "../../Constants/constants.ts";

const Feedback = () => {
    const toastConfig   = TOAST_CONFIGURATION
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        initialStatus: false,
        validationSchema: Yup.object({
            name: Yup.string().required('Name is Required'),
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            message: Yup.string().required('Message is Required'),
        }),
        onSubmit: async () => {
                toast.success(`Thank-you for your feedback.\n We will get back to you soon`, toastConfig);
                formik.resetForm();
        },
    });
    return (
        <section className='h-screen'>
            <div className="flex mt-3 space-x-4 justify-between mx-[15%] ">
                <div className=" relative w-[100%] ">
                    <h4 className="main-font font-medium  text-1xl md:text-2xl primary-text-color leading-9">
                        FeedBack
                    </h4>

                </div>
            </div>
            <div className="flex flex-1  justify-center  mt-5 sm:mt-10  mb-6">
                <div className="w-[100%] mx-[15%]">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='mb-4 sm:mb-6'>
                            <input
                                name="name"
                                className={`bg-white w-full flex rounded-md max-h-10 p-3 text-sm text-gray-500 outline-0  ${formik.touched.name && formik.errors.name ? 'border-red-500 border' : 'border border-gray-400'}`}
                                placeholder='Name'
                                type='text'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && !!formik.errors.name && (
                                <span className='text-red-600'>
                                    *{formik.errors.name}
                                </span>
                            )}
                        </div>
                        <div className='mb-4 sm:mb-6'>
                            <input
                                name="email"
                                className={`w-full bg-white flex rounded-md max-h-10 p-3 text-sm text-gray-500 outline-0  ${formik.touched.email && formik.errors.email ? 'border-red-500 border' : 'border border-gray-400'}`}
                                placeholder='Email'
                                type='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && !!formik.errors.email && (
                                <span className='text-red-600'>
                                    *{formik.errors.email}
                                </span>
                            )}
                        </div>
                        <div className='mb-4 sm:mb-6'>
                            <textarea
                                name="message"
                                className={` bg-white w-full flex rounded-md h-[200px] max-h-96 p-3 text-sm text-gray-500 outline-0  ${formik.touched.message && formik.errors.message ? 'border-red-500 border' : 'border border-gray-400'}`}
                                placeholder='Write your feedback message here...'
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.message && !!formik.errors.message && (
                                <span className='text-red-600'>
                                    *{formik.errors.message}
                                </span>
                            )}
                        </div>








                        <div
                            className='action-btn flex flex-wrap sm:flex-auto  text-center justify-center  sm:justify-end  mb-5 gap-4 '>
                            <button
                                onClick={() => formik.resetForm()}
                                type='submit'
                                className={`sm:px-5 sm:py-1.5 py-2
                                 border-blue-950 bg-white text-blue-950 hover:border-blue-950
                                w-full sm:w-[30%] justify-center text-sm rounded-md inline-flex items-center space-x-1 main-font font-normal`}
                            >
                                <span className='uppercase'>Clear</span>
                            </button>
                            <button
                                type='submit'
                                disabled={!formik.isValid}
                                className={`sm:px-5 sm:py-1.5 py-2
                                 border-blue-950 bg-blue-950 text-white
                                w-full sm:w-[30%] justify-center text-sm rounded-md inline-flex items-center space-x-1 main-font font-normal ${
                                    formik.isValid ? 'hover:border-blue-950 hover:bg-blue-950 hover:text-white' : 'opacity-50 cursor-not-allowed'
                                }`}
                            >
                                <span className='uppercase'>Submit</span>
                            </button>

                        </div>


                    </form>
                </div>
            </div>

            <div className="absolute bottom-0 flex w-full justify-evenly items-center" style={{background: '#005ee6'}}>
                <div
                    className=" white-dots bg-[radial-gradient(circle,_#ffff_3px,_transparent_4px)] bg-[length:20px_20px]"
                style={{marginBottom:'2px'}}>
                </div>
                <div>
                    <span className='text-white'>2</span>
                </div>
                <div className='inline-grid grid-flow-col auto-cols-auto'>
                    <div>
                        <img
                            src={doubleArrow}
                            alt='double-arrow'
                        />
                    </div>
                    <div style={{marginLeft: '-5px'}}>
                        <img

                            src={doubleArrow}
                            alt='double-arrow'
                        />
                    </div>

                </div>


            </div>
        </section>
    );
};

export default Feedback;
