import React from "react";

import styles from "./prod.module.css";

const ProductItem = ({ description, price, image, brandName, alt, title }) => {
  return (
    <>
      <h2 className={styles.itemHead}>{title}</h2>
      <div className={styles.wrapp}>
        <img src={image} alt={alt} className={styles.image} />
        <div>
          <p className={styles.text}>
            Производитель: <span className={styles.data}>{brandName}</span>
          </p>
          <p className={styles.text}>{price}</p>
          {/* TODO: counter */}
          {/* <p className={styles.text}>
            Количество: <span className={styles.data}>{color}</span>
          </p> */}
        </div>
      </div>
      <p className={styles.itemDescript}>{description}</p>
    </>
  );
};

ProductItem.defaultProps = {
  alt: "product image"
};

export default ProductItem;
