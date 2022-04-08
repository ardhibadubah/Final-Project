import React, { useEffect } from 'react';
import { Container, Image, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentWisata } from '../redux/wisata/action';
import Default from '../layout/Default';

const DetailsContent = () => {
  const { wisataId } = useParams();
  const dispatch = useDispatch();
  const { currentWisata } = useSelector((state) => state.wisata);

  useEffect(() => {
    dispatch(setCurrentWisata(wisataId));
  }, [dispatch, wisataId]);

  return (
    <Default>
      <Container>
        {currentWisata ? (
          <div className='py-5'>
            <Image
              src={currentWisata.image}
              style={{ width: '100%', height: '600px', objectFit: 'cover' }}
              className='mb-4'
            />
            <h1 className='mb-3'>{currentWisata.title}</h1>
            <p>{currentWisata.description}</p>
          </div>
        ) : (
          <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        )}
      </Container>
    </Default>
  );
};

export default DetailsContent;
