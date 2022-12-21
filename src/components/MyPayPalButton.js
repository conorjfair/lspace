import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js"
import { useState } from "react"

const MyPayPalButton = (props) => {

    // HOW TO GET PRODUCT DETAILS HERE

    const [error, setError] = useState(null);
    const [lock, setLock] = useState(true)

    const handleApprove = (orderId) => {
        if(lock) {
            setLock(false);
            props.handleComplete();
            console.log('Complete')
        }
        
    };
    
    if(error) {
        alert(error)
    }

  return (
    <PayPalScriptProvider 
        className= "paypal" 
        options={
        { "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >

        <PayPalButtons 
            style={{ 
            layout: "horizontal",
            shape: 'pill',
            label:'paypal',
            tagline: "false",
            
        }} 
        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {    
                        amount: {
                            value: "5.00"
                        }
                    }
                ]
            });
        }}
        onApprove={ (data, actions) => {
            
            const order = actions.order.capture()
            console.log("order", order);
            handleApprove(data.orderID)

        }}
        onError={(err) => {
            setError(err)
            console.error(err);
        }}
        onCancel={() => {
            alert("Payment cancelled")
        }}
        
      />
  </PayPalScriptProvider>
  )
  
};
export default MyPayPalButton

