import './introduction.css';
import introductionImage from '../../assets/introductionImage.png';
import doubleArrow from '../../assets/doubleArrow.png';
import {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";


const Introduction = () => {
    const [intro, setIntro] =useState(`
    In an increasingly complex and regulated environment, a well-crafted constitution
    is more than just a legal necessity—it's the foundation upon which effective
    governance is built. For not-for-profit organizations, the constitution is vital in
    aligning the organization's mission with its operational and legal frameworks,
    ensuring both compliance and agility in the face of change. This eBook is designed
    to guide board members, CEOs, governance professionals, and legal advisors
    through the intricacies of maintaining and updating their constitution. By
    approaching the constitution as a living document that underpins every aspect of
    governance, this guide will provide you with the insights and practical tools
    necessary to ensure your organization's constitution is truly fit for purpose,
    supporting its long-term success and resilience.
  `);
    const [isEdit, setIsEdit] = useState(false);
    const handleEdit = () => {
        setIsEdit(true);
    }
    const formik = useFormik({
        initialValues: {
            intro: intro,
        },
        initialStatus: false,
        validationSchema: Yup.object({
            intro: Yup.string().required('Required'),
        }),
        onSubmit: async (values) => {
           setIntro(values.intro);
           setIsEdit(false);
        },
    });
    return (
        <section>
            <div className="flex justify-center mb-4">
                <div className="w-[75%] mx-[15%] sm:w-[66.67%]">
                    <div className="w-28 h-1.5 line border rounded-full">
                    </div>
                </div>


            </div>
            <div className="flex mt-3 space-x-4 justify-between mx-[15%] ">
                <div className=" relative w-[100%] ">
                    <h4 className="main-font font-medium  text-1xl md:text-2xl primary-text-color leading-9">
                        Introduction
                    </h4>

                </div>
                <div className='action-btn '>
                    {!isEdit  && (<button className='sm:px-5 sm:py-1.5 py-2
                    border-blue-950 bg-blue-950 text-white
                      text-sm rounded-md inline-flex items-center space-x-1 main-font font-normal
                    hover:border-blue-950 hover:bg-blue-950 hover:text-white
                    '
                     onClick={() => handleEdit()}
                    >
                        <span className='uppercase'>Edit</span>
                    </button>)}


                </div>

            </div>
            {!isEdit && (<div className="flex  justify-center mt-3  mb-6">
                <div className="w-[100%] mx-[15%]">
                    <span className="secondary-font font-medium content-text-color leading-6">
                        {intro}
                    </span>
                </div>
            </div>)}
            {isEdit && (<div className="flex  justify-center mt-3  mb-6">
                <div className="w-[100%] mx-[15%]">
                    <form onSubmit={formik.handleSubmit}>
                        <label>
                            <textarea
                                name="intro"
                                className={`w-full bg-white flex rounded-md h-[200px] max-h-96 mt-2 p-3 text-sm text-gray-500 outline-0  ${formik.touched.intro && formik.errors.intro ? 'border-red-500 border' : 'border border-gray-400'}`}
                                placeholder='Write your introduction here...'
                                value={formik.values.intro}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.intro && !!formik.errors.intro && (
                                <span className='text-red-600'>
                                    *{formik.errors.intro}
                                </span>
                            )}
                        </label>
                        <div className='action-btn flex  justify-center sm:justify-end mt-3 mb-5 gap-4'>
                            {isEdit && (<button
                                type='submit'
                                disabled={!formik.isValid}
                                className={`sm:px-5 sm:py-1.5 py-1 
                                 border-blue-950 bg-blue-950 text-white
                                w-full sm:w-[30%] justify-center text-sm rounded-md inline-flex items-center space-x-1 main-font font-normal ${
                                    formik.isValid ? 'hover:border-blue-950 hover:bg-blue-950 hover:text-white' : 'opacity-50 cursor-not-allowed'
                                }`}
                                onClick={() => handleEdit()}
                            >
                                <span className='uppercase'>Save</span>
                            </button>)}
                        </div>


                    </form>
                </div>
            </div>)}
            <div className="flex">
                <img
                    className='w-full  '
                    src={introductionImage}
                    alt='Inroduction'
                />
            </div>
            <div className="flex w-full justify-evenly items-center" style={{background: '#005ee6'}}>
                <div
                    className="white-dots bg-[radial-gradient(circle,_#ffff_4px,_transparent_5px)] bg-[length:20px_20px]">
                </div>
                <div>
                    <span className='text-white'>1</span>
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

export default Introduction;
