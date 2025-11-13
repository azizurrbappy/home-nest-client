import React, { useContext, useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../context/AuthContext';
import RatingCard from '../components/RatingCard/RatingCard';

const MyRating = () => {
  const [data, setData] = useState();
  const { user } = useContext(AuthContext);
  const axios = useAxios();

  useEffect(() => {
    axios(`/reviews?email=${user.email}`).then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Container>
        <div className="py-10 text-center">
          <h1 className="text-4xl font-bold pb-2">My Ratings</h1>
          <p className="text-gray-500">See all your ratings!</p>
        </div>

        <section className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 w-fit mx-auto">
          {data && data.map(item => <RatingCard item={item}></RatingCard>)}
        </section>
      </Container>
    </>
  );
};

export default MyRating;
