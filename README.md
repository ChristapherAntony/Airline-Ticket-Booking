# AirBooking
AirBooking is an airline ticket booking web application that aims to provide users with a seamless and convenient platform for searching and booking flights. It offers a range of features to enhance the booking experience and ensure a hassle-free airline travel.

## Table of Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Getting Started](#getting-started)

* [Screenshots](#screenshots)



## Technologies Used

|   Stack                                | Technology Used                    |
|     :---:                              |     :---:                          |  
| Frontend                               | React, Redux, Tailwind CSS         | 
| Backend                                | Node js, Express js                |  
| Authentication                         |JSON Web Token / Google OAuth 2.0 / Nodemailer-OTP                |     
| Database                               | Mongo DB                           |
| Version control                        |  Git                               |
| API's                               |  [Amadeus]([https://www.careerconnect.cloud/](https://developers.amadeus.com/)https://developers.amadeus.com/)- Flight APIs  |


## Features

`Features completed`

#### Authentication - jwt
-  Email OTP login (used- nodemailer)
-  social login with google auth

#### Profile update
-  After sign up option to update profile

#### Amadeus api integration via Node SDK.
-  Flight Offers Search
-  User can search flight offers and created a page to list the available offers

## Getting Started
To get started  you can simply clone this `Airline-Ticket-Booking` repository and install the dependencies.

Clone the `Airline-Ticket-Booking` repository using git:

```bash
git clone https://github.com/ChristapherAntony/Airline-Ticket-Booking.git

```
Create a .env file in the server and client directory . Add environment-specific variables  specified in '.env.template' file in respective directory

Install dependencies & start server :
```bash
cd Airline-Ticket-Booking
cd server
npm install
npm start
```
Install dependencies & start react client app:
```bash
cd Airline-Ticket-Booking
cd client
npm install
npm run dev
```

## Screenshots

![image](https://github.com/ChristapherAntony/Airline-Ticket-Booking/assets/109226401/cd6c906d-2853-464c-b582-2a4ba75d1ee6)
![image](https://github.com/ChristapherAntony/Airline-Ticket-Booking/assets/109226401/065bebd3-eca6-4892-ad1f-bf5a886e0131)




