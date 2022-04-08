import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { CardHorizontal } from '../../component';
import Default from '../../layout/Default';

export default function Wisata() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataWisata, setDataWisata] = useState(null);
  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/wisata`,
    })
      .then((response) => {
        setDataWisata(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Default>
        <div className='container'>
          <div className='pt-2 text-start'>
            <h3 className='display-7 fw-bold'>Destinasi Wisata di Sumbawa</h3>
            <div className='col-xl-12 col-lg-6 mx-auto'>
              <p className='lead mb-3'>
                Destinasi rekomendasi dan hal yang unik di pulau Sumbawa
              </p>
            </div>
          </div>
        </div>
        <div className='container mb-5'>
          <form className='d-flex'>
            <input
              className='form-control me-5 rounded'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>

        <Container>
          {isLoading ? (
            <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
              <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            </div>
          ) : (
            <div className='d-flex flex-column align-items-center my-3'>
              <CardHorizontal data={dataWisata} />
            </div>
          )}

          <div className='d-flex flex-column align-items-center'>
            <CardHorizontal data={dataWisata} />
          </div>
        </Container>
      </Default>
    </>
  );
}
