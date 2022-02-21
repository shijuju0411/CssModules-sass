import classes from "./CssModules.modules.scss";
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- Css Modules -</p>
      <button>FIGHT!!!</button>
    </div>
  );
};
