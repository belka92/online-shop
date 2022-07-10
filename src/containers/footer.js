import React from "react";
import Footer from '../components/footer'
import Icon from '../components/icons'


export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>HELP</Footer.Title>
                    <Footer.Link to="#">My Account</Footer.Link>
                    <Footer.Link to="#">FAQs</Footer.Link>
                    <Footer.Link to="#">Contact Us</Footer.Link>
                    <Footer.Link to="#">Forgotten Password</Footer.Link>

                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>SHOPPING</Footer.Title>
                    <Footer.Link to="#">Accesibility</Footer.Link>
                    <Footer.Link to="#">Gift Cards</Footer.Link>
                    <Footer.Link to="#">Cookies</Footer.Link>
                    <Footer.Link to="#">PayPal Credit</Footer.Link>

                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>ABOUT ADVENTURE</Footer.Title>
                    <Footer.Link to="#">About Us</Footer.Link>
                    <Footer.Link to="#">Blog</Footer.Link>
                    <Footer.Link to="#">Our Stores</Footer.Link>
                    <Footer.Link to="#">Careers</Footer.Link>

                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>CONNECT WITH US</Footer.Title>
                    <Footer.Link to="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link to="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link to="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link to="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>

                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>

    )
}