import React, { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import useAxios from '../hooks/useAxios';
import FeaturedRealEstateCard from '../components/FeaturedRealEstate/FeaturedRealEstateCard';

const AllProperties = () => {
  const [sortValue, setSortValue] = useState();
  const [data, setData] = useState();
  const axios = useAxios();
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    axios('/properties').then(res => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    if (sortValue) {
      axios(`/properties?sort=${Number(sortValue)}`).then(res => {
        setData(res.data);
      });
    }
  }, [sortValue]);

  const handleSearch = e => {
    const searchText = e.target.value;
    setSearchValue(searchText);

    if (!searchText) {
      axios('/properties').then(res => {
        setData(res.data);
      });
    } else {
      const filteredData = data.filter(property =>
        property.propertyName.toLowerCase().includes(searchText.toLowerCase())
      );
      setData(filteredData);
    }
  };

  return (
    <>
      <Container className="lg:px-0 px-4">
        <section>
          <div className="py-10 text-center">
            <h1 className="text-4xl font-bold pb-2">All Properties</h1>
            <p className="text-gray-500">See all the properties!</p>
          </div>

          <div className="flex justify-between items-center w-fit mx-auto gap-6">
            <select
              value={sortValue}
              onChange={e => setSortValue(e.target.value)}
              defaultValue="Sort by"
              className="select outline-0 md:w-3xs max-sm:flex-1 bg-[#F0EFFB] border-2 border-[#E0DEF7] focus:border-[#7065f0] font-medium"
            >
              <option>Sort by</option>
              <option value="1">Price Low to High</option>
              <option value="-1">Price High to Low</option>
            </select>

            <label className="input outline-0 md:w-3xs max-sm:flex-1 bg-[#F0EFFB] border-2 border-[#E0DEF7] focus:border-[#7065f0]">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={searchValue}
                onChange={handleSearch}
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </div>
        </section>

        <section className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 w-fit mx-auto py-10">
          {data &&
            data.map(item => (
              <FeaturedRealEstateCard data={item}></FeaturedRealEstateCard>
            ))}
        </section>
      </Container>
    </>
  );
};

export default AllProperties;
