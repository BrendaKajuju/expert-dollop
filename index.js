const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  // Read variables sent via POST from our SDK
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  console.log('####################', req.body);
  let response = "";

  if (text === "") {
    console.log(text);
    // This is the first request. Note how we start the response with CON
    response = `CON Welcome to Securitopia Road Safety Support & Resources
        1. Road Abuse
        2. Hit and Run
        3. What to do when involved in an accident
        4. Roadside assistance & Towtruck Services
        `;
  } else if (text === "1") {
    // logic for first level response
    response = `CON What is the intensity of the abuse
        1. Sexual Abuse
        2. Physical Abuse`;
} 
  else if (text === "1*1") {
    // This is a second level response where the user selected 1 in the first instance
    const gbvNo = "1195";
    // This is a terminal request. Note how we start the response with END
    response = `END National GBV hotline is: ${gbvNo}`;
  } else if (text === "1*2") {
    // This is a second level response where the user selected 1 in the first instance
    const policeNo = "911";
    // This is a terminal request. Note how we start the response with END
    response = `END Police emergency hotline is: ${policeNo}`;
  }
  else if (text === "2") {
    // Business logic for first level response
    // This is a terminal request. Note how we start the response with EN
    const policeNo = "911";
    const ntsaNo = "0718555999";

    const emergencyServices = "999"
    response = `END
    // Make sure you have noted any details about the offender's Number Plate, Car Make, or Location.     
    // If anyone is injured, immediately call: ${emergencyServices}
    // NTSA emergency hotline is: ${ntsaNo}
    // Police emergency hotline is: ${policeNo}
    `;
  }
  else if (text === "3") {
    // Business logic for first level response
    // This is a terminal request. Note how we start the response with END
    response = `END     
    1. Do Not Leave The Scene Of The Accident unless your life is in danger
    2. Reach out to the Traffic Police from the nearest police station and report what has happened
    3. Capture Details Of All Parties Involved
    4. Make Notes Of What has Happened
    5. Reach Out To Your Insurance Provider
    `;
  } else if (text === "4") {
    // logic for first level response
    response = `CON What tow-truck service do you need?
    1. Out of gas services
    2. Car wont start
    3. Roadside assistance
    4. Dead car battery services (changing of car battery, or recharging your car battery)
    5. Fix flat tire/tire fix
    6. Heavy duty towing
    7. Long distance towing
    8. Auto lockout services (unlocking doors, ignition key replacements)
    9. Junk car removals/ old car removals
    10. Truck towing and motorcycle towing`;
} 
  else if (text === "4*1") {
    // This is a second level response where the user selected 1 in the first instance
    const towNo = "07328471";
    // This is a terminal request. Note how we start the response with END
    response = `END Your response has been recorded. A Women Approved Towing Service will contact you shortly from phone number: ${towNo}`;
  } 
    else if (text === "4*2") {
    // This is a second level response where the user selected 1 in the first instance
    const towNo = "07328471";
    // This is a terminal request. Note how we start the response with END
    response = `END A Women Approved Towing Service will contact you shortly from phone number: ${towNo}`;
  }
    else if (text === "4*3") {
    // This is a second level response where the user selected 1 in the first instance
    const towNo = "07328471";
    // This is a terminal request. Note how we start the response with END
    response = `END A Women Approved Towing Service will contact you shortly from phone number: ${towNo}`;
  }
    else if (text === "4*4") {
    // This is a second level response where the user selected 1 in the first instance
    const towNo = "07328471";
    // This is a terminal request. Note how we start the response with END
    response = `END A Women Approved Towing Service will contact you shortly from phone number: ${towNo}`;
  }

    else if (text === "4*5") {
    // This is a second level response where the user selected 1 in the first instance
    const towNo = "07328471";
    // This is a terminal request. Note how we start the response with END
    response = `END A Women Approved Towing Service will contact you shortly from phone number: ${towNo}`;
  }
    else if (text === "4*6") {
    // This is a second level response where the user selected 1 in the first instance
    const towNo = "07328471";
    // This is a terminal request. Note how we start the response with END
    response = `END A Women Approved Towing Service will contact you shortly from phone number: ${towNo}`;
  }
    else if (text === "4*7") {
    // This is a second level response where the user selected 1 in the first instance
    const towNo = "07328471";
    // This is a terminal request. Note how we start the response with END
    response = `END A Women Approved Towing Service will contact you shortly from phone number: ${towNo}`;
  }
    else if (text === "4*8") {
    // This is a second level response where the user selected 1 in the first instance
    const towNo = "07328471";
    // This is a terminal request. Note how we start the response with END
    response = `END A Women Approved Towing Service will contact you shortly from phone number: ${towNo}`;
  }
    else if (text === "4*9") {
    // This is a second level response where the user selected 1 in the first instance
    const towNo = "07328471";
    // This is a terminal request. Note how we start the response with END
    response = `END A Women Approved Towing Service will contact you shortly from phone number: ${towNo}`;
  }
    else if (text === "4*10") {
    // This is a second level response where the user selected 1 in the first instance
    const towNo = "07328471";
    // This is a terminal request. Note how we start the response with END
    response = `END A Women Approved Towing Service will contact you shortly from phone number: ${towNo}`;
  }

  // Print the response onto the page so that our SDK can read it
  res.set("Content-Type: text/plain");
  res.send(response);
  // DONE!!!
});

module.exports = router;

