import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ handleCardClick, handleActiveModal, clothingItems }) {
  return (
    <div className="clothes-section">
      <div className="clothes-content">
        <p className="clothes-text">Your Items</p>
        <button className="clothes-button" onClick={handleActiveModal}>
          +Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems?.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
