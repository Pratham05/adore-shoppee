import React from 'react';
import styles from './ListView.module.scss';

import Layout from '../../components/Layout';

import FilterPanel from '../../components/PageSections/Filters/FilterPanel';
import ProductPanel from '../../components/PageSections/ProductPanel';

const ListView = () => {
    return (
       <Layout>
         <div className={styles.ListView}>
           <div className={styles.ListView__Filters}>
              <FilterPanel />
           </div>
           <div className={styles.ListView__Products}>
              <ProductPanel />
           </div>
         </div>
       </Layout>
    );
};

export default ListView;
