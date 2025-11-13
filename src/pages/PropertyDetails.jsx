import React, { useContext, useEffect, useState } from 'react';
import { MapPin, Calendar, Tag, Mail, Phone } from 'lucide-react';
import { useParams } from 'react-router';
import useAxios from '../hooks/useAxios';
import { DotLoader } from 'react-spinners';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import Ratings from '../components/Ratings/Ratings';

const PropertyDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const axios = useAxios();
  const [rating, setRating] = useState(null);
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState();

  useEffect(() => {
    axios(`/property/${id}`).then(res => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    axios(`/reviews/${id}`).then(res => {
      setReviews(res.data);
    });
  }, []);

  const handleRatingsReviews = e => {
    e.preventDefault();

    // current data
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;

    const reviewerName = user.displayName;
    const reviewerEmail = user.email;
    const propertyName = data.propertyName;
    const propertyId = id;
    const propertyImage = data.propertyImage;
    const starRating = rating;
    const reviewText = e.target.reviewText.value;
    const reviewDate = currentDate;

    const newReview = {
      reviewerName: reviewerName,
      reviewerEmail: reviewerEmail,
      propertyName: propertyName,
      propertyId: propertyId,
      propertyImage: propertyImage,
      starRating: starRating,
      reviewText: reviewText,
      reviewDate: reviewDate,
    };

    axios.post('/review', newReview).then(res => {
      if (res.data.insertedId) {
        e.target.reset();
        toast.success('Review added successfully!');
      }
    });
  };
  return (
    <>
      {data ? (
        <div className="min-h-screen bg-gradient-to-tl from-[#E0DEF7] to-transparent">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={data.propertyImage}
                    alt={data.propertyName}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#7065f0] text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    {data.category}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-3xl font-bold text-slate-800">
                      {data.propertyName}
                    </h2>
                    <div className="text-3xl font-bold text-[#7065f0]">
                      ${data.propertyPrice}
                      <span className="text-lg font-semibold text-gray-500">
                        /month
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={20} className="text-[#7065f0]" />
                      <span className="font-medium">{data.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={20} className="text-[#7065f0]" />
                      <span>Posted on {data.postedDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Tag size={20} className="text-[#7065f0]" />
                      <span>{data.category}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      Description
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {data.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-800">
                      Ratings & Reviews
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="text-4xl font-bold text-[#7065f0]">
                        4.7
                      </div>
                      <div>
                        --------
                        <p className="text-sm text-right text-slate-500 mt-1">
                          3 reviews
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-slate-800 mb-4">
                      Write a Review
                    </h4>

                    <form onSubmit={handleRatingsReviews}>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Your Rating
                            <div>
                              <div className="rating pt-2 space-x-1">
                                <input
                                  onClick={() => setRating(1)}
                                  type="radio"
                                  name="rating-2"
                                  className="mask mask-star-2 bg-orange-400"
                                  aria-label="1 star"
                                />
                                <input
                                  onClick={() => setRating(2)}
                                  type="radio"
                                  name="rating-2"
                                  className="mask mask-star-2 bg-orange-400"
                                  aria-label="2 star"
                                />
                                <input
                                  onClick={() => setRating(3)}
                                  type="radio"
                                  name="rating-2"
                                  className="mask mask-star-2 bg-orange-400"
                                  aria-label="3 star"
                                />
                                <input
                                  onClick={() => setRating(4)}
                                  type="radio"
                                  name="rating-2"
                                  className="mask mask-star-2 bg-orange-400"
                                  aria-label="4 star"
                                />
                                <input
                                  onClick={() => setRating(5)}
                                  type="radio"
                                  name="rating-2"
                                  className="mask mask-star-2 bg-orange-400"
                                  aria-label="5 star"
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Your Review
                          </label>
                          <textarea
                            name="reviewText"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-transparent resize-none"
                            rows="3"
                            placeholder="Share your thoughts about this property..."
                          />
                        </div>
                        <input
                          type="submit"
                          disabled={!rating}
                          className="btn bg-[#7065f0] text-white font-medium  rounded-lg"
                          value="Submit Review"
                        />
                      </div>
                    </form>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {reviews &&
                      reviews.map(review => (
                        <div
                          key={review._id}
                          className="border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="font-semibold text-slate-800">
                                {review.reviewerName}
                              </p>
                              <p className="text-sm text-slate-500">
                                {review.reviewDate}
                              </p>
                            </div>
                            <Ratings rating={review.starRating}></Ratings>
                          </div>
                          <p className="text-slate-600">{review.reviewText}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-20">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">
                    Posted By
                  </h3>

                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="mb-4">
                      <img
                        src={data.profilePhoto}
                        alt={data.name}
                        className="w-24 h-24 rounded-full object-cover border-3 border-[#e0def7]"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      {data.name}
                    </h4>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-slate-600 bg-slate-50 rounded-lg p-3">
                      <Mail size={20} className="text-[#7065f0]" />
                      <span className="text-sm break-all">{data.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 bg-slate-50 rounded-lg p-3">
                      <Phone size={20} className="text-[#7065f0]" />
                      <span className="text-sm">{data.phone}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-[#7065f0] text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                      Contact Agent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[calc(100vh-50vh)] justify-center items-center">
          <DotLoader color="#7065f0" />
        </div>
      )}
    </>
  );
};

export default PropertyDetails;
