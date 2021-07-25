# Implementation of Decentralised Taxi Hailing Service using Ethereum Smart Contract

This project showcases the interaction between the commuter and driver during the course of booking a ride on blockchain. 

dRyver handles the sequence of activities and processes smoothly to make the experiance of travelling seamless.

#### Problems in Existing System
---

-Applications like Uber provide a matching service and apparently decentralize it. 
This is P2P technology at its finest .
Or is it? Several scandals have emerged out of {Uber’s corporate culture as of late.
Uber has become notorious both for its business practices, and for what it incentivi‐
zes and allows its drivers to do. Uber executive Emil Michael told the company to dig
up dirt on a particular critical female reporter as well as other opponents. The power
the company exerts over its drivers has grown from surveillance into possibly preda‐
tory lending practices. Uber’s “God Mode,” the ability to see all rides happening in
any location in real time with all social data attached to each rider, has been the sub‐
ject of controversy on multiple occasions. Drivers, meanwhile, have been known to
hail Lyft cabs only to cancel them, so that riders would instead choose Uber.
Despite these concerns, Uber has grown at an exponential rate over the past few years
and is showing revenue numbers in the billions. It provides a useful service: people
prefer using a location-aware app to hail a ride over calling a taxi, and it’s safe to
say the demand for real-time ride-sharing isn’t going away anytime soon. But privacy
invasion and the vast imbalance of power between a billion-dollar corporation and its
87 contractors are the negatives of Uber that riders must accept when they use its ser‐
vice.


- Blockchain can solve this by providing immutable and verifiable data sources.

		
 

#### What we are providing?
---

- We have implemented smart contract addressing the issue of storing critical data necessary at different stages of Taxi Hailing and making it verifiable by all stakeholders in dRyver.

-We eliminate the existence of middle agency, Thereby completely removing the regulation of salaries of drivers by corporations. And in that earning of the driver is solely dependent on the number of rides.  


#### Application Workflow Diagram
---
![](screens/workflow.png)

#### In this application we have Three Contracts
---

1. User
2. Driver
3. Customer

**Owner :** Owner deploys the contract.

**User :**  User is the base contract containing some common attributes and behaviour of Customers and Drivers.

**Driver :** This Contract contains essential details of drivers along with some driver-specific methods .

**Customer :** This contract contains methods that allow customers to request a ride.

#### Included Components
---
-  Solidity (**Ethereum**)
-  Metamask  (**Ethereum** wallet)
-  Mumbai testnet ( **Polygon** Network with **Matic** Faucet )
-  Remix IDE
-  Truffle
-  IPFS
-  Web3JS
-  React Native 
-  Nodejs (Express)
-  Google Map Api
-  Firebase for Google Auth

#### Prerequisites
---
- Nodejs v9.10 or above
- Truffle v4.1.8 (core: 4.1.8) (http://truffleframework.com/docs/getting_started/installation)
- Solidity v0.4.23
- Metamask (https://metamask.io) /Ganache Wallet

#### Deployment Steps:
---
**Setting up Ethereum Smart Contract:**

```
git clone https://github.com/NakamotoSans/Contracts
cd COntracts/
```
#### UI screenshots of Mobile App:

<p align="center">	
<table>
	
  <tr>
	  <td><b>Welcome Screen</b></td>
	  <td><b>Login Screen</b></td>
	  <td><b>Google AUth</b></td>
  </tr>
  <tr>
    <td><img src="https://github.com/NakamotoSans/Screens/blob/main/IMG_20210725_143841.jpg" width=400 height=670></td>
    <td><img src="https://github.com/NakamotoSans/Screens/blob/main/IMG_20210725_145106.jpg" width=400 height=670></td>
    <td><img src="https://github.com/NakamotoSans/Screens/blob/main/IMG_20210725_145547.jpg" width=400 height=670></td>
  </tr>
		
  <tr>
	  <td><b>Add Driver Details</b></td>
	  <td><b>Link Wallet</b></td>
	  <td><b>Searching Phase</b></td>
  </tr>
  
	
  <tr>
    <td><img src="https://github.com/NakamotoSans/Screens/blob/main/Screenshot_2021-07-25-15-06-28-217_com.sans.nakamoto.jpg" width=400 height=670></td>
    <td><img src="https://github.com/NakamotoSans/Screens/blob/main/IMG_20210725_150003.jpg" width=400 height=670></td>
    <td><img src="https://github.com/NakamotoSans/Screens/blob/main/IMG_20210725_150640.jpg" width=400 height=670></td>
  </tr>	
		
  <tr>
	  <td><b>Select Pickup and Drop Locations</b></td>
	  <td><b>Active Ride Requests</b></td>
	  <td><b>Ride Confirmed</b></td>
  </tr>
  <tr>
    <td><img src="https://github.com/NakamotoSans/Screens/blob/main/IMG_20210725_151310.jpg" width=400 height=670></td>	
    <td><img src="https://github.com/NakamotoSans/Screens/blob/main/Screenshot_2021-07-25-15-06-57-049_com.sans.nakamoto.jpg" width=400 height=670></td>
    <td><img src="https://github.com/NakamotoSans/Screens/blob/main/IMG_20210725_150832.jpg" width=400 height=670></td>
    
  </tr>	
 </table>	
</p>






