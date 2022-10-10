package com.example.FXTrading.service;


	import java.util.List;

import com.example.FXTrading.entity.Book;
import com.example.FXTrading.entity.Print;
import com.example.FXTrading.repository.TradingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

		

		
		@Service
		public class BookingServices {
			double amount ;
			double rate = 66.00;
			static int tradeNo = 0;
			//static ArrayList<Print> data = new ArrayList<>();
			
			@Autowired
			private TradingRepository repository;
			
			public List<Print> printTrade(){
				return repository.findAll();
			}
			public String booking(Book book, String bookingconfirmation) {
				double transferAmount=rate*book.getTransferAmount();
		    			 if(bookingconfirmation.equalsIgnoreCase("Book")) {
		    				repository.save(new Print(++tradeNo, book.getCurrencyPair(), book.getCustomerName(), book.getTransferAmount(), rate));
		    				
		    				return "Trade for USDINR has been booked with rate 66.00, The amount of Rs." + transferAmount+ " will be Transferred in 2 working days to " + book.getCustomerName() ;
		    			 }
		    			 else if(bookingconfirmation.equalsIgnoreCase("cancel")) {
		    				 return "Your Trade was cancelled";
		    			 }
		    			 else {
		    				 return "Invalid entry";
		    			 }
		    	 }
		    		

}
