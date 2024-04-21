
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./style/layout.css"
import { Link } from "gatsby"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-container">
            <div className="sec-footer-logo">
              <Link to="../../../"><img src="/Restnest.svg"/> Restnest Hospitality</Link>
              <Link to="https://wa.me/message/ACLPH2B2QEQEP1"><img src="/phone-solid 1.svg"/>7788584942</Link>
              <Link to="" style={{cursor: "none !important"}}><img src="/envelope-open-text-solid 1.svg"/>info@restnest.ca</Link>
            </div>
            <div className="sec-footer">
              <Link to="../">Home</Link>
              <Link to='/blog'>Blog</Link>
              <Link to="/properties">Properties</Link>
            </div>
            <div className="sec-footer">
              <Link to='/contact-us' >Contact Us</Link>
              <Link to='/about-us' >Our Story</Link>
              <Link to='/rental-agreement' >Rental Agreement</Link>
            </div>
            <div className="sec-footer">
              <Link to='/good-neighbor' >Good Neighbor</Link>
              <Link to='/privacy-policy' >Policies</Link>
              <Link to='/faq'>FAQ</Link>
            </div>            
          </div>
          <div className="copyright">
              <p>Designed and developed by <Link to="https://softylus.com/">SoftYlus</Link> 2024</p>
              <p>All copyright © reserved.</p>
          </div>
        </footer>
      </div> 
    </>
  )
}

export default Layout
