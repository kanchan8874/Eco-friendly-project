'use client'
import React from 'react'
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddProduct = () => {
  const router = useRouter();
  //initializing formik

  const productForm = useFormik({
    initialValues: {
      name: '',
      brand: '',
      price: '',
      description: '',
      category: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      //send value to backend tbhi save hoga...
      // setTimeout(() => {
      //   resetForm();

      // }, 2000);

      axios.post('http://localhost:5000/product/add', values)
        .then((result) => {
          toast.success('product added successfully');
          // router.push('/login');
        }).catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || 'some error occured');

        });
    },
    // ValidationSchema: SignupSchema
  });


  // cloudnary ........
  const FileUpload = () => {

    const uploadFile = (e) => {
      const file = e.target.files[0];
      const forData = new FormData();
      forData.append('file', file);
      forData.append('upload_preset', 'mypreset8874');
      forData.append('cloud_name ', 'dqumvzhys');

      axios.post('https://api.cloudinary.com/v1_1/dqumvzhys/image/upload', forData)
        .then((result) => {
          console.log(result.data);
          toast.success('flie uploaded successfully');

        }).catch((err) => {
          console.log(err);
          toast.error('failed to upload file');

        });

    }

    return (
      <div className='max-w-lg mx-auto'>
        <h2 className='text-2xl text-center font-bold'>Cloude file upload</h2>

        <div>
          <label
            className='p-10 border-dashed border-2 border-gray-300 text-center cursor-pointer block'
            htmlFor='myupload'>Update file  </label>
          <input className="hidden" id='myupload' type="file" onChange={uploadFile} />
        </div>
      </div>
    )
  }
  return (
    <>
      {/* Comment Form */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
              Add Product Form
            </h2>
          </div>
          {/* Card */}
          <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
            <form onSubmit={productForm.handleSubmit}>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="hs-feedback-post-comment-name-1"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={productForm.handleChange}
                  value={productForm.values.name}
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Full name"
                />
              </div>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="hs-feedback-post-comment-email-1"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  onChange={productForm.handleChange}
                  value={productForm.values.brand}

                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label
                  htmlFor="hs-feedback-post-comment-textarea-1"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Price
                </label>
                <div className="mt-1">
                  <textarea
                    id="price"
                    onChange={productForm.handleChange}
                    value={productForm.values.price}

                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter product category"
                    defaultValue={""}
                  />
                </div>
                <div className="mb-4 sm:mb-8">
                  <label
                    htmlFor="hs-feedback-post-comment-name-1"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    onChange={productForm.handleChange}
                    value={productForm.values.description}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter the description"
                  />
                </div>
                <div className="mb-4 sm:mb-8">
                  <label
                    htmlFor="hs-feedback-post-comment-name-1"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    category
                  </label>
                  <input
                    type="text"
                    id="category"
                    onChange={productForm.handleChange}
                    value={productForm.values.category}
                    
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Full Description"
                  />
                </div>
              </div>
              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Comment Form */}
    </>

  )
}
export default AddProduct;
