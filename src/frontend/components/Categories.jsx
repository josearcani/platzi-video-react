import React, { Children } from 'react'
import PropTypes from 'prop-types'

import '../assets/styles/components/Categories.scss'

const Categories = ({ children, title }) => (
  <React.Fragment>
    <h3 className="categories__title">{title}</h3>
    {children}
  </React.Fragment>
)

Categories.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
}

export default Categories