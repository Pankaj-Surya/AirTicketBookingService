💛💛💛💛💛💛💛💛💛❤️❤️😍😍😍😍🙈🙈🙈🚗🚗🚗📘📘📘📗📗📗📔📕😍😍😍👉👉👉👈👈👈🎈🎈🎆⚽⚽🍔🍔🍿🍿🍟🔴🔴🟠🟠🟡🟡🟢🟢🔵🔵🟣🟣🟤🟤⚫⚫⚪⚪🟥🟥🟧🟧🟨🟨🟩🟩🟦🟦🟦🟪🟪🔶🔶🔷🔷🔲🔲🕑


# LEC 11 : BOOKING SERVICE

## 🔴 **Configuration**
1. created project - 
`npm init -y`
2. `npm i all `respective pavkage
3. created folder structure and start the server
4. create migrations and seeder
`npx sequelize init`
5. Model & Migration creation*
`>npx sequelize model:generate --name Booking --attributes flightId:integer,userId:integer,status:enum`
6. Do Changes in Model & Migration
`npx sequelize db:migrate`
7. Check the DB -  ` show tables
desc tablename(us)`

### **Q.How to create migration for add New field ?**
1. create migration for new field `npx sequelize migration:create --name modify_bookings_add_new_fields`
2. added method in moigtation

🔶 **Add new Coloumn**

``` javascript 
await queryInterface.addColumn('BOOKINGS', 
    'totalCost'
    ,{ 
      type : Sequelize.INTEGER,
      allowNull : false,
      defaultValue : 0
    });
```

</br>


🔶 **Remove Column**
``` javascript
 await queryInterface.dropTable('BOOKINGS',totalCost);
 ```

### <red>Note : </red> 
 At Last DB Migrate 

`npx sequelize db:migrate`

And Add Fields in Model as well

## <yellow>Imporant <yellow>
1. **Model** : If sync then make changes in DB directly

2. **Migration** : increment or decrement changes in DB with history


# LEC 12 : BOOKING SERVICE

### **Q.  Why we need to calculate totalCost in Backend Only ?**
1. If user send payload as totalCost as zero so your app lost money 
2. we verify  and calculate totalCost 

</br>

### 👺 **Create Booking** ✈️ :  
1. getBooking(flightId)
2. Got flightData 
3. check inputBooking noOfSeat > flightData.totalSeats throw error
4. totalCost = noOfSeat* priceOFFlight
5. bookingPayload = {...data,totolCost}
6. create(bookingPayload)
7. updateFlight(req.params.id,req.body) - In Service SerachFlightService
8. update the seat in flight Once Booked 


# LEC 13 : REMINDER SERVICE

## 🔴 **Configuration**
1. created project - 
`npm init -y`
2. `npm i all + nodemailer` respective pavkage
3. created folder structure and start the server
4. create migrations and seeder
`npx sequelize init`
5. Model & Migration creation*
`npx sequelize model:generate --name Booking --attributes flightId:integer,userId:integer,status:enum`
6. Do Changes in Model & Migration
`npx sequelize db:migrate`
7. Check the DB -  ` show tables
desc tablename(us)`

## 🔴 **SETUP**
1. Inside main index.js setup server
2. PORT set in serverConfig
3. script : start
4. setup git
5. install nodemailer / sandGrid / Twillo
6. Gmail ➡️ Two step Verfication below App Password select ➡️ 
7. Select Mail , ReminderService and click Generate
8. Copy app Password
9. env ➡️ EMAIL_PASS = password
10. nodemailer.createTransport()

Config 

``` javascript
const { EMAIL_ID, EMAIL_PASS } = require('./serverConfig');
console.log(EMAIL_ID, EMAIL_PASS);
const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL_ID,
        pass: EMAIL_PASS
    }
}); 
```
</br>



### **Node CRON**
- Schedule a job 


<style>
red { color: red }
yellow { color: yellow }
blue { color: blue }
</style>

<red> red color markdown text</red>
<yellow> red color markdown text</yellow>









