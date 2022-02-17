import { Fragment } from 'react';
import Head from 'next/head';
import {DDB_URL} from '../util/constants'

import StoreList from '../components/stores/StoreList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Next JS Stores</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React stores!'
        />
      </Head>
      <StoreList stores={props.stores} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  console.log("XXXXXXXXXXXXXXXXXx Regenerating")
  const data = await fetch(DDB_URL + '/list',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: ""
  });

  const storeData = await data.json();
  const store = storeData.Items;

  return {
    props: {
      stores: store.map((s) => ({
        name: s.name.S,
        address: s.address.S,
        image: s.image.S,
        id: s.pk.S,
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
