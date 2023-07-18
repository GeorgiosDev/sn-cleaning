import React from "react"
import "../styles/company.css"
import companyImg from "../assets/images/company.jpg"

const Company = () => {
  return (
    <section className="company">
      <h2 className="company-h2">Η εταιρεία μας</h2>
      <div className="company-component">
        <img src={companyImg} alt="Company" className="company-image" />
        <p className="company-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit, pariatur explicabo molestiae omnis alias optio nam ea dolorem assumenda, illo quae itaque nesciunt neque natus at dolores ullam quaerat debitis. Suscipit repudiandae deserunt ullam quam doloribus? Ab, id? Blanditiis sapiente hic dolor nobis ex minima eum ipsum consectetur delectus earum quasi obcaecati in, aspernatur, quidem voluptate? Aliquam, maxime minima reiciendis ad quibusdam maiores optio.</p>
      </div>
    
    </section>
  )
}

export default Company
