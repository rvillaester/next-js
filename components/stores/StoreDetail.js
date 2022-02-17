import classes from './StoreDetail.module.css';

function StoreDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.name}
      />
      <h1>{props.name}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default StoreDetail;
