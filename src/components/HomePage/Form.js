import "./Form.css";

const Form = () => {
  return (
    <div>
      <div className="row service">
        <div className="col-12 col-lg-4">
          <h2>FREE SHIPING</h2>
          <p>Free shiping worlwide</p>
        </div>
        <div className="col-12 col-lg-4">
          <h2>24 X 7 SERVICE</h2>
          <p>Free shiping worlwide</p>
        </div>
        <div className="col-12 col-lg-4">
          <h2>FESTIVAL OFFER</h2>
          <p>Free shiping worlwide</p>
        </div>
      </div>
      <div className="row form mt-4 mb-4">
        <div className="col-12 col-lg-6">
          <h2>LET'S BE FRIENDS</h2>
        </div>
        <div className="col-12 col-lg-6">
          <input type="email" placeholder="Enter your email address" />
          <button>Subcribe</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
