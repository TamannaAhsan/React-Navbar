import React from "react";
import Contact from "../component/Contact";

const ContactPage = () => {
    return (
        <>
            <Contact/>
        </>

    );
   
};

export default ContactPage;

// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//     const navigate =useNavigate();

//     const goToHome = () => {
//         navigate("/");
//     };

//     const goBack = () => {
//         navigate(-1);
//     };
//     return (
//         <>
//             <section>
//                 <h1>Cart</h1>
//                 <button onClick={()=> goToHome()}>Go to Home</button>
//                 <button onClick={()=> goBack()}>go back</button>
//             </section>
//         </>
//         );
// };

// export default Cart;

