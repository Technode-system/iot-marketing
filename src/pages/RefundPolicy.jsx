import React from 'react'
import './TermsAndConditions.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
// import Footer from './Footer'

function RefundPolicy() {
    return (
        <>
            <Layout>
            <main className="header-offset content-wrapper about-wrapper mt-14">
                <div className="terms-container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <section className="terms-title text-primary">
                            <h1> Refund, Return & Warranty Policy</h1>
                        </section>
                    </div>

                    <hr />
                    <div className="row text-gray-500 text-xl"> <p className='p-10'>
                        Thanks for purchasing our products at www.technodes.in operated by Technode
                        In order to be eligible for a refund, you have to return the product within 5 calendar days of your purchase. The product must be in the same condition that you receive it and undamaged in any way. You also have to provide the Original payment receipt in order to avail the refund.
                        After we receive your item, our team of professionals will inspect it and process your refund. The money will be refunded to the original payment method you’ve used during the purchase. For credit card payments it may take 5 to 10 business days for a refund to show up on your credit card statement.If the product is damaged in any way, or you have initiated the return after 5 calendar days have passed, you will not be eligible for a refund.
                        The Product with warranty will be exchanged immediately in case of any physical damage during shipment. Product condition will be inspected through photos provided by the customer on our official email ID info@technodes.in
                        In order to avail the refund for the product the customer has to send product to our official company address, Mittal Enclave, Shop No.1, Ground Floor, Vrindavan Shopping Centre B-3, opposite to Citizen Credit Co-operative Bank, Naigaon East, Mumbai, Maharashtra 401208. The courier charges will be bare at customer end. Once the product is received our team will inspect it and process your refund. Refund process maximum time is 2-3 working business days. Refund process updates will be shared with customer via official email ID. In case of any further clarification about the policy you can always reach us at info@technodes.in or call us at +91 8208087079
                    </p></div>

                </div>
            </main>
            </Layout>
            {/* <Footer /> */}
        </>

    )
}

export default RefundPolicy