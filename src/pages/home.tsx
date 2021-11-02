import React from 'react';

import Search from 'components/Search';

import { Card } from 'UI';
import { AddCustomer } from 'components';

const Home = () => {
  return (
    <div>
      <AddCustomer />

      <Search />

      <Card />
    </div>
  );
};

export default Home;
