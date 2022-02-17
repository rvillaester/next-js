import StoreItem from './StoreItem';
import classes from './StoreList.module.css';

function StoreList(props) {
  return (
    <ul className={classes.list}>
      {props.stores.map((store) => (
        <StoreItem
          key={store.id}
          id={store.id}
          image={store.image}
          name={store.name}
          address={store.address}
        />
      ))}
    </ul>
  );
}

export default StoreList;
