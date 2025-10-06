import React from 'react';
import { useData } from '../../context/DataContext';
import { useParams } from 'react-router';
import Technology from './Technology';

const TechnologyContent = () => {
  const currentNav = useParams();
  const { data, isLoading } = useData();
  if (isLoading) return <div>Loading...</div>;

  const currentData =
    data && // if data available then find
    data.find((d) => {
      if (!d.name) return; // this is because it cought the bugs when data is not been changed yet.
      return d.name.split(' ').join('').toLowerCase() === currentNav.technology.replace('-', '');
    });

  if (!currentData) return;

  return <Technology data={currentData} />;
};

export default TechnologyContent;
