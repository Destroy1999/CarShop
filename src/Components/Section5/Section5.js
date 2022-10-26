import React from 'react'
import './Section5.css'

export default ()=>{
    return(
        <section>
            <div className={"sec5Container"}>
                <div className={"contact"}>
                <div className={"sec5ContactText"}>
                    <p>
                        <h3>Car Dealership</h3>
                        <h4>500 Terry Francois St.</h4>
                        <h4>San Francisco, CA 94158</h4>
                    </p>
                    <p>
                        <h4>Email: info@mysite.com</h4>
                        <h4>Tel:  123-456-7890</h4>
                        <h4>Fax: 123-456-7890</h4>
                    </p>
                </div>
                <div className={"sec5FormD"}>
                    <form>
                        <input type={"name"} placeholder={"Name"}/>
                        <input type={"email"} placeholder={"E-Mail"}/>
                        <input type={"tel"} placeholder={"Phone"}/>
                        <textarea placeholder={"Type your message here..."}></textarea>
                        <input type="button" value={"Submit"}/>
                    </form>
                </div>
                </div>
                <div className={"contactMap"}>
                    <iframe
                        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.5256049849486!2d44.47068998117316!3d40.210813209395766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a97de58e8e3f7%3A0x27e16f703f403707!2zQmVrbmF6YXJpYW4gU3QsIFllcmV2YW4sINCQ0YDQvNC10L3QuNGP!5e1!3m2!1sru!2s!4v1610020358267!5m2!1sru!2s"}
                        width={"100%"} height={"250"} frameBorder={"0"} style={{border:'0',padding:'100px 0 0'}} aria-hidden={"false"} tabIndex={"0"}></iframe>
                </div>
            </div>
        </section>
    )
}