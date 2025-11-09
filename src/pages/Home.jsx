import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider/Slider';
import Container from '../components/Container/Container';
import FeaturedRealEstateCard from '../components/FeaturedRealEstate/FeaturedRealEstateCard';
import useAxios from '../hooks/useAxios';
import TenantsAndLandlords from '../components/TenantsAndLandlords/TenantsAndLandlords';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

const Home = () => {
  const axios = useAxios();
  const [freData, setFREData] = useState();

  useEffect(() => {
    axios('/featuredrealestate').then(data => {
      setFREData(data.data);
    });
  }, []);

  return (
    <>
      <Container>
        <Slider></Slider>
      </Container>

      <TenantsAndLandlords></TenantsAndLandlords>

      <WhyChooseUs></WhyChooseUs>

      <Container className="my-20">
        <div className="w-fit mx-auto text-center mb-16">
          <h1 className="text-[#000929] font-bold lg:text-4xl text-3xl mb-2">
            Featured Real Estate
          </h1>
          <p className="text-[#000929]">
            Some of our picked properties near you location.
          </p>
        </div>

        <section className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 w-fit mx-auto">
          {freData
            ? freData.map(data => (
                <div key={data._id}>
                  <FeaturedRealEstateCard data={data}></FeaturedRealEstateCard>
                </div>
              ))
            : ''}
        </section>
      </Container>
    </>
  );
};

export default Home;
