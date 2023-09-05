var express = require("express");
var stripe = require('stripe')('PRIVATE)
var router = express.Router();

let plan = null

router.post("/", async (req, res, next) => {
  const { plan } = req.body;
  if (plan.type !== "standard" && plan.type !== "pro") {
    return res.send("Invalid plan type");
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: plan.price,
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: 'http://localhost:9000/api/paymentsuccess',
      cancel_url: 'http://localhost:9000/api/paymentfailed',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error creating Stripe Checkout session");
  }
});


module.exports = router;
