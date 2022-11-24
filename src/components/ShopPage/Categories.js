import MenuList from "./MenuList";
import DecimalFormat, { RoundingMode } from "decimal-format";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { popupActions } from "../../store/popup";

const Categories = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const df = new DecimalFormat("#,##0");
  df.setRoundingMode(RoundingMode.HALF_EVEN);

  return (
    <div className="row mt-5">
      <div className="col-12 col-lg-3">
        <MenuList />
      </div>
      <div className="col-12 col-lg-9">
        <div className="row">
          {props.productList.map((item, index) => {
            return (
              <div
                className="col-12 col-lg-4 text-center"
                key={index}
                onClick={() => {
                  navigate("/detail", { replace: false });
                  dispatch(popupActions.itemDetail(item));
                }}
              >
                <img src={item.img1} width="100%" alt={item.name} />
                <h5>{item.name}</h5>
                <p>{df.format(item.price)} VNĐ</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
