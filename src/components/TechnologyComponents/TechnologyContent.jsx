import React from 'react';
import { useData } from '../../context/DataContext';
import { useParams } from 'react-router';
import Technology from './Technology';

const TechnologyContent = () => {
  const currentNav = useParams();
  let { data, isLoading } = useData();
  data = data.technology;
  if (isLoading || !data) return <div>Loading...</div>;
  const currentData = data // if data available then find
    ? data.find((d) => {
        if (!d.name) return; // this is because it cought the bugs when data is not been changed yet.
        return d.name.split(' ').join('').toLowerCase() === currentNav.technology.replace('-', '');
      })
    : [];

  return <Technology data={currentData} />;
};

export default TechnologyContent;
