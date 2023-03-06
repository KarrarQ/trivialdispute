import React from "react";
import '../CategoryCard/CategoryCard.css'
import PropTypes from 'prop-types'

const CategoryCard = ({ categoryName }) => {
    return (
      <section className="category-card">
        <h4 className="category-name-card">{categoryName}</h4>
      </section>
    )
  }

  export default CategoryCard;

  CategoryCard.propTypes = {
    categoryName: PropTypes.string
  }