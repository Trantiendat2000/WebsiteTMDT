import DecimalFormat, { RoundingMode } from "decimal-format";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../store/popup";
import ProductsDetail from "./popup";

const ProductList = (props) => {
  const dispatch = useDispatch();

  const showDetail = useSelector((state) => state.popup.item);
  const isShow = !!showDetail;

  const popupShowHandler = (item) => {
    dispatch(popupActions.popupShow(item));
  };
  const df = new DecimalFormat("#,##0");
  df.setRoundingMode(RoundingMode.HALF_EVEN);

  return (
    <div>
      <div className="mt-5">
        <p>MADE THE HARD WAY</p>
        <h2>TOP TRENDING PRODUCTS</h2>
      </div>
      <div className="row">
        {props.productList.map((item, index) => {
          return (
            <div
              className="col-12 col-lg-3 text-center"
              key={index}
              onClick={() => {
                popupShowHandler(item);
              }}
            >
              <img src={item.img1} width="100%" alt={item.name} />
              <h5>{item.name}</h5>
              <p>{df.format(item.price)} VNĐ</p>
            </div>
          );
        })}
      </div>
      {isShow && <ProductsDetail />}
    </div>
  );
};

export default ProductList;
