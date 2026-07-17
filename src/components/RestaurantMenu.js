import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CON_URL } from "../utils/constant";
import { addItem, removeItem, clearCart, setRestaurantId } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const dispatch = useDispatch();
  const cartRestaurantId = useSelector((store) => store.cart.restaurantId);
  const cartItems = useSelector((store) => store.cart.items);

  if (resInfo === null) return <Shimmer />;

  const handleAddItem = (item) => {
    if (cartRestaurantId && cartRestaurantId !== resId) {
      const confirmSwitch = window.confirm(
        "Your cart has items from another restaurant. Adding this item will clear your cart. Continue?"
      );
      if (!confirmSwitch) return;
      dispatch(clearCart());
    }
    dispatch(setRestaurantId(resId));
    dispatch(addItem(item));
  };

  const cards = resInfo?.cards || [];

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
    locality,
    sla,
    cloudinaryImageId,
  } = cards.find((c) => c?.card?.card?.info)?.card?.card?.info || {};

  const offers =
    cards.find((c) => c?.card?.card?.id === "offerCollectionWidget")?.card
      ?.card?.gridElements?.infoWithStyle?.offers || [];

  const itemCards =
    cards
      .find((c) => c?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (c) => c?.card?.card?.itemCards
      )?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <div className="menu-hero">
        <img className="menu-hero-img" src={CON_URL + cloudinaryImageId} alt={name} />
      </div>

      <h1 className="menu-title">{name}</h1>
      <div className="menu-subinfo">
        <span>⭐ {avgRating} ({totalRatingsString})</span>
        <span>{costForTwoMessage}</span>
      </div>
      <p className="menu-cuisines">{cuisines?.join(", ")}</p>
      <p className="menu-locality">
        {areaName}
        {locality ? `, ${locality}` : ""}
        {sla?.slaString ? ` · ${sla.slaString}` : ""}
      </p>

      {offers.length > 0 && (
        <>
          <h3 className="menu-section-title">Deals for you</h3>
          <div className="menu-offers">
            {offers.map((offer, i) => (
              <div className="offer-card" key={i}>
                <p className="offer-header">{offer.info.header}</p>
                <p className="offer-desc">{offer.info.description}</p>
                {offer.info.couponCode && (
                  <p className="offer-code">{offer.info.couponCode}</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      <h2 className="menu-section-title">Recommended ({itemCards.length})</h2>
      <ul className="menu-items">
        {itemCards.map((item) => {
          const info = item.card.info;
          const price = (info.finalPrice ?? info.price ?? info.defaultPrice ?? 0) / 100;
          const isVeg =
            info.itemAttribute?.vegClassifier === "VEG" || info.isVeg === 1;
          const quantity = cartItems.filter((i) => i.id === info.id).length;
          return (
            <li className="menu-item" key={info.id}>
              <div className="menu-item-left">
                <span className={`veg-icon ${isVeg ? "veg" : "non-veg"}`}></span>
                <p className="menu-item-name">{info.name}</p>
                <p className="menu-item-price">₹{price}</p>
                {info.ratings?.aggregatedRating?.rating && (
                  <p className="menu-item-rating">
                    ★ {info.ratings.aggregatedRating.rating} (
                    {info.ratings.aggregatedRating.ratingCount})
                  </p>
                )}
                {info.description && (
                  <p className="menu-item-desc">{info.description}</p>
                )}
              </div>
              {info.imageId && (
                <div className="menu-item-right">
                  <img className="menu-item-img" src={CON_URL + info.imageId} alt={info.name} />
                  {quantity > 0 ? (
                    <div className="stepper">
                      <button
                        className="stepper-btn"
                        onClick={() => dispatch(removeItem(info.id))}
                      >
                        −
                      </button>
                      <span className="stepper-count">{quantity}</span>
                      <button className="stepper-btn" onClick={() => handleAddItem(info)}>
                        +
                      </button>
                    </div>
                  ) : (
                    <button className="add-btn" onClick={() => handleAddItem(info)}>
                      ADD
                    </button>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
