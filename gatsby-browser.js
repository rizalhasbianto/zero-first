/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/components.css"
import "./src/styles/normalize.css"
import "./src/styles/vessel-dev.css"
import "./src/styles/global.css"
exports.onRouteUpdate = ({ location }) => {
    console.log('new pathname', location.pathname)
  }	