"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginSchema = Yup.object().shape({
  identifier: Yup.string().required("Email or Phone Number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0d1321]">
      {/* Left Side (Image & Text) */}
      <div className="hidden md:flex md:w-1/2 relative flex-col justify-end !p-12">
        <div className="absolute inset-0 z-0">
          <img
          src={"https://locallyeg.com/auth_img.jpg"}
            alt="Shopping Fashion"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-4xl font-extrabold text-white leading-tight !mb-6 font-geist-sans">
            Locally – Your Go-To Shopping <br /> Destination
          </h1>
          <p className="text-white/90 text-lg !mb-6 leading-relaxed">
            From everyday fashion and lifestyle to trusted local and global
            brands, <br /> Locally brings everything you need into one seamless
            platform.
          </p>
          <p className="text-white/90 text-lg !mb-6 leading-relaxed">
            Shop with confidence, discover exclusive deals, and enjoy a smarter
            way to <br /> shop — all designed around you.
          </p>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="flex w-full md:w-1/2 flex-col justify-center items-center !p-8 lg:!p-16 text-white font-geist-sans">
        <div className="w-full !max-w-md">
          <h2 className="text-3xl font-extrabold text-center !mb-10">Login</h2>

          <Formik
            initialValues={{ identifier: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Login Values:", values);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="flex flex-col space-y-5 text-sm gap-4">
                <div className="flex flex-col">
                  <Field
                    type="text"
                    name="identifier"
                    placeholder="Email or Phone Number"
                    className={`bg-transparent border ${
                      touched.identifier && errors.identifier
                        ? "border-red-500"
                        : "border-gray-600 focus:border-blue-500"
                    } rounded-md !px-4 !py-3 outline-none transition-colors w-full`}
                  />
                  <ErrorMessage
                    name="identifier"
                    component="span"
                    className="text-red-500 text-xs !mt-1 !ml-1"
                  />
                </div>

                <div className="flex flex-col relative text-gray-300">
                  <div className="relative w-full">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className={`bg-transparent border ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : "border-gray-600 focus:border-blue-500"
                      } rounded-md !px-4 !py-3 outline-none transition-colors w-full text-white placeholder-gray-400`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-red-500 text-xs !mt-1 !ml-1"
                  />
                </div>

                <div className="flex justify-end w-full">
                  <Link
                    href={'#'}
                    className="!text-blue-500 text-sm hover:underline font-medium"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2060d3] hover:bg-blue-600 transition-colors text-white font-semibold rounded-md !py-3 !mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>

          <p className="text-center  !mt-6 text-sm text-gray-300 font-medium">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="!text-blue-500 hover:underline font-bold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
