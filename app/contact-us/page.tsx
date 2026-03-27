"use client";

import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  FiMail, 
  FiClock, 
  FiEdit, 
  FiUser, 
  FiMessageSquare 
} from 'react-icons/fi';

const ContactUsPage = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      orderNumber: '',
      message: '',
      acceptedPolicy: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      subject: Yup.string().required('Subject is required'),
      orderNumber: Yup.string(),
      message: Yup.string().required('Message is required'),
      acceptedPolicy: Yup.boolean().oneOf([true], 'You must acknowledge the privacy policy'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // Typically an API call would go here.
      console.log('Form data:', values);
      setTimeout(() => {
        alert("Contact request submitted successfully!");
        setSubmitting(false);
        resetForm();
      }, 1000);
    },
  });

  const inputClasses = "w-full bg-[#0f141e] border border-gray-700/50 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block !p-3 mt-2 outline-none transition-colors";
  const selectClasses = "w-full bg-[#0f141e] border border-gray-700/50 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block !p-3 mt-2 outline-none transition-colors appearance-none";
  const errorClasses = "text-red-500 text-xs !mt-1";
  const labelClasses = "block text-sm font-bold text-white !mb-2";

  return (
    <div className="bg-[#0f141e] min-h-screen font-sans flex flex-col">
      {/* Breadcrumb section */}
      <div className="border-b border-gray-700/50 bg-[#151b27]">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-4 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:!text-blue-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-400 font-medium">Contact Us</span>
        </div>
      </div>

      {/* Header section */}
      <div className="bg-[#151b27] !py-12 md:!py-12 border-b border-gray-700/50 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Contact Us</h1>
      </div>

      {/* Main Content */}
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-12 md:!py-16 w-full flex-grow">
        
        {/* Top Hero Card */}
        <div className="!p-8 md:!p-16 flex flex-col md:flex-row items-center justify-between gap-12 !mb-8">
          <div className="md:w-3/5">
            <h2 className="text-4xl md:text-[50px] font-extrabold text-white tracking-tight !mb-6 leading-tight">
              Contact Us
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed">
              Contact Our Customer Care Team Through The Contact Form Below, Email Us At{' '}
              <a href="mailto:Info@locallyeg.com" className="!text-blue-400 font-bold hover:underline">Info@locallyeg.com</a>{' '}
              Or Chat With Us On WhatsApp For Instant Support.
            </p>
          </div>
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="w-55 h-55 md:w-64 md:h-64 rounded-full bg-[#1c2434] flex items-center justify-center -m-4 md:-m-0 border-[24px] border-[#0f141e]">
              <FiMail className="w-20 h-20 md:w-28 md:h-28 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !mb-8">
          {/* Email Card */}
          <div className="bg-[#151b27] rounded-2xl !p-8 border border-gray-700/50 flex flex-col items-start hover:border-gray-500/50 transition-colors">
            <div className="flex items-center gap-3 !mb-6">
              <div className="w-8 h-8 rounded bg-blue-600/20 flex items-center justify-center shrink-0">
                <FiMail className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="text-xl font-extrabold text-white">Email Us</h3>
            </div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed !mb-2">
              Send us an email anytime
            </p>
            <a href="mailto:info@locallyeg.com" className="!text-blue-400 hover:underline text-base md:text-lg font-medium">
              info@locallyeg.com
            </a>
          </div>

          {/* Response Time Card */}
          <div className="bg-[#151b27] rounded-2xl !p-8 border border-gray-700/50 flex flex-col items-start hover:border-gray-500/50 transition-colors">
            <div className="flex items-center gap-3 !mb-6">
              <div className="w-8 h-8 rounded bg-blue-600/20 flex items-center justify-center shrink-0">
                <FiClock className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="text-xl font-extrabold text-white">Response Time</h3>
            </div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              We Will Aim To Respond To You Within 1-2 Business Days.
            </p>
          </div>
        </div>

        {/* Write Us Section */}
        <div className="bg-[#151b27] rounded-2xl !p-6 md:!p-10 border border-gray-700/50">
          
          <div className="flex items-center gap-4 !mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex flex-col justify-center items-center shrink-0">
              <FiEdit className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Write Us</h2>
          </div>

          <form onSubmit={formik.handleSubmit}>
            
            {/* Your Information Block */}
            <div className="border border-gray-700/50 rounded-xl !p-6 md:!p-8 !mb-6 bg-[#1a2233]">
              <div className="flex items-center gap-3 !mb-6 border-b border-gray-700/50 !pb-4">
                <div className="w-8 h-8 rounded bg-blue-600/20 flex flex-col justify-center items-center shrink-0">
                  <FiUser className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Your Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !mb-6">
                <div>
                  <label htmlFor="fullName" className={labelClasses}>Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Full Name" 
                    className={inputClasses}
                    {...formik.getFieldProps('fullName')}
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <p className={errorClasses}>{formik.errors.fullName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className={labelClasses}>Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    className={inputClasses}
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className={errorClasses}>{formik.errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className={labelClasses}>Phone Number</label>
                  <input 
                    type="tel" 
                    id="phoneNumber" 
                    placeholder="Phone Number" 
                    className={inputClasses}
                    {...formik.getFieldProps('phoneNumber')}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <p className={errorClasses}>{formik.errors.phoneNumber}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className={labelClasses}>Subject</label>
                  <div className="relative">
                    <select 
                      id="subject" 
                      className={selectClasses}
                      {...formik.getFieldProps('subject')}
                    >
                      <option value="" disabled hidden>Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Returns & Refunds">Returns & Refunds</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center !px-4 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  {formik.touched.subject && formik.errors.subject && (
                    <p className={errorClasses}>{formik.errors.subject}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="orderNumber" className={labelClasses}>Order Number</label>
                <input 
                  type="text" 
                  id="orderNumber" 
                  placeholder="Order Number" 
                  className={inputClasses}
                  {...formik.getFieldProps('orderNumber')}
                />
              </div>
            </div>

            {/* Message Block */}
            <div className="border border-gray-700/50 rounded-xl !p-6 md:!p-8 !mb-6 bg-[#1a2233]">
              <div className="flex items-center gap-3 !mb-6 border-b border-gray-700/50 !pb-4">
                <div className="w-8 h-8 rounded bg-blue-600/20 flex flex-col justify-center items-center shrink-0">
                  <FiMessageSquare className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Message</h3>
              </div>
              
              <div>
                <textarea 
                  id="message" 
                  rows={6} 
                  className={`${inputClasses} resize-none`} 
                  placeholder="Please describe your inquiry in detail..."
                  {...formik.getFieldProps('message')}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className={errorClasses}>{formik.errors.message}</p>
                )}
              </div>
            </div>

            {/* Privacy Policy Checkbox Block */}
            <div className="border border-gray-700/50 rounded-xl !p-6 flex items-center gap-4 !mb-8 bg-[#1a2233]">
              <div className="flex items-center h-5">
                <input 
                  id="acceptedPolicy" 
                  type="checkbox" 
                  className="w-6 h-6 text-blue-600 bg-[#0f141e] border-gray-600 rounded focus:ring-blue-500 cursor-pointer accent-[#2463eb]" 
                  {...formik.getFieldProps('acceptedPolicy')}
                />
              </div>
              <label htmlFor="acceptedPolicy" className="text-base font-bold text-white cursor-pointer select-none">
                I Have Read And Understood The Contact Us Privacy And Policy.
              </label>
            </div>
            {formik.touched.acceptedPolicy && formik.errors.acceptedPolicy && (
              <p className={`${errorClasses} !-mt-6 !mb-6`}>{formik.errors.acceptedPolicy}</p>
            )}

            {/* Submit Button */}
            <div>
              <button 
                type="submit" 
                disabled={formik.isSubmitting}
                className="bg-[#2463eb] hover:!bg-blue-600 cursor-pointer text-white font-bold text-lg !py-4 !px-16 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUsPage;