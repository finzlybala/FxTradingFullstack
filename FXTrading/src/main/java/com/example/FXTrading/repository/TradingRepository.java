package com.example.FXTrading.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.FXTrading.entity.Print;
@Repository
public interface TradingRepository extends JpaRepository<Print, Integer>{

}


