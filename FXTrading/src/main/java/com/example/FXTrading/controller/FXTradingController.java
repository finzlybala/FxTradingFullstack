package com.example.FXTrading.controller;

import java.util.List;

import com.example.FXTrading.entity.Book;
import com.example.FXTrading.entity.Print;
import com.example.FXTrading.service.BookingServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FXTradingController {

		@Autowired
		BookingServices booking;

		@PostMapping("booktrade/{bookingconfirmation}")
		public String bookTrade(@RequestBody Book book, @PathVariable String bookingconfirmation) {
			return booking.booking(book,bookingconfirmation);
		}

		@GetMapping("printtrade")
		public List<Print> printTrade() {
			return booking.printTrade();
		}
		@GetMapping("/print")  
		public Book print() {
			Book book = new Book();
			return book;
		}

	
	} 


