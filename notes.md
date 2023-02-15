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

### **Q.HOw to create migration for add New field ?**
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

















<style>
red { color: red }
yellow { color: yellow }
</style>

<red> red color markdown text</red>
<yellow> red color markdown text</yellow>









