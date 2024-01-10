import React from 'react'
import Link from "next/link"
import Imgae from "next/image"
import "../styles/Footer.scss"

const Footer = () => {
  return (
    <div className="flexbox-container">
        {/*About Use Column*/}

        <div>
            <ul className="List-1">
                <li>About Us</li>
                <li>Our Products</li>
                <li>Workshop</li>
                <li>Donations</li>
            </ul>
            
            
        </div>

        {/*Contact Column*/}

        <div>
        <ul className="List-1">
                <li>Contact Us</li>
                <li>Our Policies</li>
                <li>FAQs</li>
                <li>News</li>
            </ul>
        </div>

        {/*Socials */}

        <div className="Socials">
            <h1>Where to find us</h1>
            <p>Save-On-Foods</p>
            <p>
            32885 Mission Way #109, Mission, BC V2V 6T8
               
            </p>
            <p>
            32700 South Fraser Way #3 Abbotsford, BC V2T 4M5
            </p>

            
        </div>

    </div>
  )
}

export default Footer