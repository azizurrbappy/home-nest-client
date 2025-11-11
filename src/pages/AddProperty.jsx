import React, { useContext, useState } from 'react';
import Container from '../components/Container/Container';
import { AuthContext } from '../context/AuthContext';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-toastify';

const AddProperty = () => {
  const { user } = useContext(AuthContext);
  const [textLength, setTextLength] = useState('');
  const axios = useAxios();

  const handleAddProperty = e => {
    e.preventDefault();

    // current data
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;

    const name = e.target.name.value;
    const email = e.target.email.value;
    const profilePhoto = user.photoURL;
    const propertyName = e.target.propertyName.value;
    const propertyImage = e.target.propertyImage.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const propertyPrice = Number(e.target.propertyPrice.value);

    const bedrooms = Number(e.target.bedrooms.value);
    const bathrooms = Number(e.target.bathrooms.value);
    const areaSize = e.target.areaSize.value + ' m²';

    const newProperty = {
      name: name,
      email: email,
      profilePhoto: profilePhoto,
      propertyName: propertyName,
      propertyImage: propertyImage,
      category: category,
      shortDescription: description || '',
      location: location,
      propertyPrice: propertyPrice,
      postedDate: currentDate,
      beds: bedrooms,
      bathroom: bathrooms,
      flatSiz: areaSize,
    };

    axios.post('/properties', newProperty).then(res => {
      if (res.data.insertedId) {
        e.target.reset();
        toast.success('Property added successfully!');
      }
    });
  };

  return (
    <Container className="max-w-3xl lg:px-0 px-4 pt-10">
      {/* Page Head */}
      <section className="text-center pb-10">
        <h1 className="text-3xl font-bold pb-2">Add New Property</h1>
        <p className="text-gray-500">
          Fill out the form below to add a new property to your property list
        </p>
      </section>

      <section className="p-4 border border-gray-300 rounded-xl">
        <div>
          <h4 className="text-base font-semibold">Personal Info</h4>
          <p className="text-sm text-gray-500">
            Enter your personal information.
          </p>
        </div>

        <form onSubmit={handleAddProperty} className="pt-5">
          <div className="pb-3.5">
            <p className="text-sm font-semibold pb-1.5">Full Name *</p>
            {user ? (
              <input
                type="text"
                name="name"
                required
                className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
                placeholder="Full Name"
                defaultValue={user.displayName}
                disabled
              />
            ) : (
              <div className="skeleton w-full h-10 rounded-lg"></div>
            )}
          </div>

          <div className="pb-3.5">
            <p className="text-sm font-semibold pb-1.5">Email *</p>
            {user ? (
              <input
                type="email"
                name="email"
                required
                className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
                placeholder="Full Name"
                defaultValue={user.email}
                disabled
              />
            ) : (
              <div className="skeleton w-full h-10 rounded-lg"></div>
            )}
          </div>

          <hr className="my-5 text-gray-300" />

          <div className="">
            <h4 className="text-base font-semibold">Property Info</h4>
            <p className="text-sm text-gray-500">
              Enter the basic details about your property.
            </p>
          </div>

          <div className="pt-5">
            <p className="text-sm font-semibold pb-1.5">Property Name *</p>
            <input
              type="text"
              name="propertyName"
              required
              className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
              placeholder="Enter a clear, descriptive property name"
            />
          </div>

          <div className="pt-3.5">
            <p className="text-sm font-semibold pb-1.5">Property Description</p>
            <textarea
              name="description"
              onChange={e => setTextLength(e.target.value)}
              value={textLength}
              maxLength={2000}
              className="textarea outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
              placeholder="Provide a detailed description of your property..."
            ></textarea>
            <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
              <p>
                Include features, benefits, specifications, and usage
                instructions.
              </p>
              <p>{textLength.length}/2000</p>
            </div>
          </div>

          <div className="pt-5 flex items-center justify-between gap-2 ">
            <input
              type="number"
              name="bedrooms"
              required
              className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
              placeholder="Bedrooms? ex: 4"
            />
            <input
              type="number"
              name="bathrooms"
              required
              className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
              placeholder="Bathrooms? ex: 3"
            />
            <input
              type="text"
              name="areaSize"
              required
              className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
              placeholder="Area Size? ex: 40x40"
            />
          </div>

          <div className="pt-3.5">
            <p className="text-sm font-semibold pb-1.5"> Category *</p>
            <select
              name="category"
              required
              defaultValue="Select Category"
              className="select outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
            >
              <option disabled={true}>Select Category</option>
              <option>Rent</option>
              <option>Sale</option>
              <option>Commercial</option>
              <option>Land</option>
              <option>etc.</option>
            </select>
          </div>

          <div className="pt-5">
            <p className="text-sm font-semibold pb-1.5">
              Price <span>($)</span> *
            </p>
            <input
              name="propertyPrice"
              type="number"
              required
              className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
              placeholder="example: 1200"
            />
          </div>

          <div className="pt-5">
            <p className="text-sm font-semibold pb-1.5">Location *</p>
            <input
              name="location"
              type="text"
              required
              className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
              placeholder="example: city, area, or address"
            />
          </div>

          <div className="pt-3.5 pb-10">
            <p className="text-sm font-semibold">Property Media *</p>
            <div className="text-xs text-gray-500 pt-0.5 pb-2">
              <p>Enter high-quality images to showcase your property</p>
            </div>
            <input
              name="propertyImage"
              type="text"
              required
              className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
              placeholder="Enter photo url"
            />
          </div>

          <input
            className="btn bg-[#7065f0] text-white font-medium w-full rounded-lg"
            type="submit"
            value="Add Property"
          />
        </form>
      </section>
    </Container>
  );
};

export default AddProperty;
