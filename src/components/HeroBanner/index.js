import { Button } from "antd";
import { useDispatch } from "react-redux";
import { openCreateModal } from "store/formModal";

import "./style.css";

const HeroBanner = () => {
  const dispatch = useDispatch();
  const onCreate = () => dispatch(openCreateModal());

  return (
    <div className="hero-banner-container">
      <div className="main-content-container">
        <h1 className="title">Countries of the world</h1>

        <Button
          type="primary"
          onClick={onCreate}
          className="create-btn"
          size="large"
        >
          Creat a new country
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
