import React from 'react'
import PropTypes from 'prop-types'
import Page from '../../templates/page'

const PagePreview = ({ entry, widgetFor }) => (
  <Page
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PagePreview