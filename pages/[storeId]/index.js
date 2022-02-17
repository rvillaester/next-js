import { Fragment } from 'react';
import Head from 'next/head';

import {DDB_URL} from '../../util/constants'

import StoreDetail from '../../components/stores/StoreDetail';

function StoreDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.storeData.name}</title>
        <meta name='description' content={props.storeData.description} />
      </Head>
      <StoreDetail
        image={props.storeData.image}
        name={props.storeData.name}
        address={props.storeData.address}
        description={props.storeData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const ddbdata = await fetch(DDB_URL + "/list",
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: ""
  });

  const storeData = await ddbdata.json();
  const data = storeData.Items;

  return {
    fallback: 'blocking',
    paths: data.map((d) => ({
      params: { storeId: d.pk.S },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single store

  const storeId = context.params.storeId;
  const payload = {
    id: storeId
  };

  const ddbdata = await fetch(DDB_URL + '/get',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(payload)
  });

  
  const storeData = await ddbdata.json();
  const data = storeData.Items[0];
  return {
    props: {
      storeData: {
        id: storeId,
        name: data.name.S,
        address: data.address.S,
        image: data.image.S,
        description: data.description.S,
      },
    },
    revalidate: 2,
  };
}

export default StoreDetails;
