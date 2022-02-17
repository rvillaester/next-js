import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NewStoreForm from '../../components/stores/NewStoreForm';

function NewStorePage() {
  const router = useRouter();

  async function addStoreHandler(enteredStoreData) {
    const response = await fetch('/api/new-store', {
      method: 'POST',
      body: JSON.stringify(enteredStoreData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Store</title>
        <meta
          name='description'
          content='Add your own store and create amazing networking opportunities.'
        />
      </Head>
      <NewStoreForm onAddStore={addStoreHandler} />
    </Fragment>
  );
}

export default NewStorePage;
