const axios = require('axios')
const {BookingRepository} = require('../repository/index')
const {FLIGHT_SERVICE_PATH} = require('../../src/config/serverConfig')

const {ServiceError} = require('../utils/index')

class BookingService{
   
    constructor(){
         this.bookingRepository= new BookingRepository(); 
    }


  
    async createBooking(data){
       try {
        console.log("data -> ",data)
         //data -> flghttId
         const flightId =  data.flightId 
         // flight api request -> flightId 
         const getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`
         //console.log(getFlightRequestURL)
         // fetch flightData ->price,noOfSeats
         //http://localhost:3000/api/v1/flights/5
         const response = await axios.get(getFlightRequestURL);
         const flightData = response.data.data;
         //console.log("flightData -> ",flightData)
         let priceOfTheFlight = flightData.price;
  
         // noOfSeats < bookSeats throw error
          if(data.noOfSeats>flightData.noOfSeats){
             throw new ServiceError('Something went wrong in the booking process', 'Insufficient seats in the flight');
          }
          const totalCost = priceOfTheFlight * data.noOfSeats;
 
          const bookingPayload =  {...data,totalCost};
          
          const booking = await this.bookingRepository.create(bookingPayload)
 
          const updateFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`
 
          const updateFLight = await axios.put(updateFlightRequestURL,{
             totalSeats: flightData.totalSeats - booking.noOfSeats
          });
 
          const finalBooking = await this.bookingRepository.update(booking.id, {status: "Booked"});
          return finalBooking;
          // up
         // calculate total cost
         
         // create booking 
         // update flight seats 
       
       } catch (error) {
        console.log(error);
        if(error.name == 'RepositoryError' || error.name == 'ValidationError') {
            throw error;
        }
        throw new ServiceError();
       }

  }
}


module.exports = BookingService