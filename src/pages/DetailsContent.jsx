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
      {currentWisata ? (
        <>
          <Image
            src={currentWisata.image}
            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
            className='mt-0 mb-4'
          />
          <div className='py-5'>
            <Container>
              <div className='mb-5'>
                <h1 className='mb-3'>{currentWisata.title}</h1>
                <p>{currentWisata.description}</p>
              </div>
              <div className='d-flex justify-content-center'>
                <iframe
                  height='600'
                  src='https://www.youtube.com/embed/Zl9ZxdJlPmA'
                  title='YouTube video player'
                  frameborder='0'
                  className='w-75'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                />
              </div>
            </Container>
          </div>
        </>
      ) : (
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      )}
    </Default>
  );
};

export default DetailsContent;
