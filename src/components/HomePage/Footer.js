import "./Footer.css";

const Footer = () => {
  return (
    <div className="row text-center bg-dark text-white footer">
      <div className="col-12 col-lg-4">
        <h4>CUSTOMER SERVICES</h4>
        <a href="#">Help & Contact us</a>
        <br />
        <a href="#">Returns & Refunds</a>
        <br />
        <a href="#">Online Stores</a> <br />
        <a href="#">Terms & Conditions</a> <br />
      </div>
      <div className="col-12 col-lg-4">
        <h4>COMPANY</h4>
        <a href="#">What we do</a> <br />
        <a href="#">Available Services</a> <br />
        <a href="#">Latest Posts</a> <br />
        <a href="#">FAQs</a> <br />
      </div>
      <div className="col-12 col-lg-4">
        <h4>SOCICAL MEDIA</h4>
        <a href="#">Twitter</a> <br />
        <a href="#">Instagram</a> <br />
        <a href="#">Facebook</a> <br />
        <a href="#">Pinterest</a> <br />
      </div>
    </div>
  );
};

export default Footer;
