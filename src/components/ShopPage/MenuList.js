import classes from "./MenuList.module.css";

const MenuList = () => {
  return (
    <div className={classes.menu}>
      <h2>CATEGORIES</h2>
      <h4>APPLE</h4>
      <p>All</p>
      <h4>IPHONE & MAC</h4>
      <p>Iphone</p>
      <p>Ipad</p>
      <p>Macbook</p>
      <h4>WIRELESS</h4>
      <p>Airpod</p>
      <p>Watch</p>
      <h4>OTHER</h4>
      <p>Mouse</p>
      <p>Keyboard</p>
      <p>Other</p>
    </div>
  );
};

export default MenuList;
