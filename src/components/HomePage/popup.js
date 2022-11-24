import { Fragment } from "react";
import classes from "./popup.module.css";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../store/popup";
import DecimalFormat, { RoundingMode } from "decimal-format";
import { useNavigate } from "react-router-dom";

function ProductsDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const df = new DecimalFormat("#,##0");
  df.setRoundingMode(RoundingMode.HALF_EVEN);

  function BackDrop() {
    const showDetail = useSelector((state) => state.popup.item);
    console.log(showDetail);
    return (
      <div className={classes.container}>
        <div className={classes.overley}>
          <span
            className={classes.close}
            onClick={() => dispatch(popupActions.popupHide())}
          >
            x
          </span>
          <div className={classes.item}>
            <div>
              <img
                src={showDetail.img1}
                alt={showDetail.category}
                width="100%"
              />
            </div>
            <div>
              <h3>{showDetail.name}</h3>
              <h5>{df.format(showDetail.price)} VNĐ</h5>
              <p>{showDetail.short_desc}</p>
              <button
                onClick={() => {
                  navigate("/detail", { replace: false });
                  dispatch(popupActions.itemDetail(showDetail));
                }}
              >
                View Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}
    </Fragment>
  );
}
export default ProductsDetail;
