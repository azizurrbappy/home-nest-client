import React, { use, useEffect, useRef, useState } from 'react';
import Container from '../components/Container/Container';
import { AuthContext } from '../context/AuthContext';
import useAxios from '../hooks/useAxios';
import useTruncateText from '../hooks/useTruncateText';
import { FiEdit } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineMoreVert } from 'react-icons/md';
import { Navigate, NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const MyProperties = () => {
  const { user } = use(AuthContext);
  const axios = useAxios();
  const smallText = useTruncateText();
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios(`/properties?email=${user.email}`).then(res => {
      setData(res.data);
    });
  }, []);

  const handleDelete = id => {
    const propertyID = id;

    axios.delete(`/properties/${propertyID}`).then(res => {
      if (res.data.deletedCount > 0) {
        const deleteProperty = data.filter(
          property => propertyID !== property._id
        );
        setData(deleteProperty);

        toast.success('Property deleted successfully!');
      }
    });
  };

  return (
    <>
      <Container className="px-4 lg:px-0">
        <div className="py-10 text-center">
          <h1 className="text-4xl font-bold pb-2">My Properties</h1>
          <p className="text-gray-500">See all your properties!</p>
        </div>

        <section className="md:max-w-3xl max-w-fit mx-auto space-y-5">
          {data &&
            data.map(item => (
              <div
                key={item._id}
                className="card w-full bg-base-100 card-sm rounded-xl border border-gray-300"
              >
                <section className="flex justify-between items-center p-3.5 flex-col md:flex-row gap-10">
                  <div className="flex gap-6">
                    <img
                      className="w-20 h-20 rounded-lg"
                      src={item.propertyImage}
                      alt=""
                    />
                    <div className="space-y-1.5">
                      <h2 className="text-xl font-semibold flex gap-2">
                        {item.propertyName}
                        <h4 className="text-[#7065f0]">
                          $({item.propertyPrice})
                        </h4>
                      </h2>
                      <p className="text-xs font-medium text-center opacity-50">
                        {item.description && smallText(item.description, 6)}
                      </p>
                      <span className="text-center py-1 px-3 text-sm font-bold bg-[#7065f0] text-white dark:text-white rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-x-3">
                    <NavLink
                      to={`/update-property/${item._id}`}
                      className="tooltip"
                      data-tip="Update"
                    >
                      <button className="btn btn-soft btn-primary p-fit h-fit p-2 rounded-full">
                        <FiEdit size={20} />
                      </button>
                    </NavLink>

                    <div className="tooltip" data-tip="Delete">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-soft btn-error p-fit h-fit p-2 rounded-full"
                      >
                        <FaRegTrashAlt size={20} />
                      </button>
                    </div>

                    <div className="tooltip" data-tip="See More">
                      <NavLink
                        to={`/property/${item._id}`}
                        className="btn btn-soft btn-success p-fit h-fit p-2 rounded-full"
                      >
                        <MdOutlineMoreVert size={20} />
                      </NavLink>
                    </div>
                  </div>
                </section>
              </div>
            ))}

          {data && data.length == 0 && (
            <div
              role="alert"
              className="alert alert-warning alert-soft mx-auto w-lg"
            >
              <span>Warning: Please add first property!</span>
            </div>
          )}
        </section>
      </Container>
    </>
  );
};

export default MyProperties;
