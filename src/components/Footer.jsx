import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <p className={style.copyright}>
        &copy; Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
