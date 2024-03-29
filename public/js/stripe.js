import axios from 'axios'
import {showAlert} from './alerts'


const stripe = Stripe('pk_test_51OZB2LSCVk7tyYoqzaJngIcG2ypumjKnyQEMT0BmHLzJDKfKhMazFBMXfOgj2x1BBujq2r0ctGGmhaj8h5PTd7h700gPhgDoyB')



export const bookTour = async (tourId) => {
    try{

        // 1)Get checkout session from API
        const session = await axios(`http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`)
        // console.log(session)

        // 2)create checkout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        })
    }
    catch(err){
        console.log(err)
        showAlert("error" , err)
    }

}