import React, { useMemo } from 'react';
import { useOutletContext, useParams } from 'react-router';
import Role from './Role';
import Spinner from '../ReUseComp/Spinner';

const CrewContent = () => {
  const { data, isLoading } = useOutletContext();

  const currentNav = useParams();

  if (!data) return <p>loading</p>; // if data is not arrived yet
  const currentRoleData = data.find((d) => {
    if (!d.role) return; // this is because it cought the bugs when data is not been changed yet.
    return d.role.split(' ').join('').toLowerCase() === currentNav.role;
  });

  return <Role data={currentRoleData} />;
};

export default CrewContent;
