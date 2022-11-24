import { useSelector, useDispatch } from "react-redux";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import Banner from "../ShopPage/Banner";
import DecimalFormat, { RoundingMode } from "decimal-format";
import "./DetailPage.css";

const DetailPage = () => {
  const dispatch = useDispatch();
  const itemDetail = useSelector((state) => state.popup.itemDetail);
  console.log(itemDetail);

  const df = new DecimalFormat("#,##0");
  df.setRoundingMode(RoundingMode.HALF_EVEN);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="row mt-5">
        <div className="col-lg-2 img-list">
          <img src={itemDetail.img1} alt={itemDetail.category} width="40%" />
          <img src={itemDetail.img2} alt={itemDetail.category} width="40%" />
          <img src={itemDetail.img3} alt={itemDetail.category} width="40%" />
          <img src={itemDetail.img4} alt={itemDetail.category} width="40%" />
        </div>
        <div className="col-lg-4">
          <img src={itemDetail.img2} alt={itemDetail.category} width="100%" />
        </div>
        <div className="col-lg-6 description">
          <h2>{itemDetail.name}</h2>
          <h5>{df.format(itemDetail.price)} VNĐ</h5>
          <p>{itemDetail.short_desc}</p>
          <p>
            <b>CATEGORY: </b>
            {itemDetail.category}
          </p>
          <div>
            <input type="number" step="1" placeholder="QUANTITY" />
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
