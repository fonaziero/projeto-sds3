package com.fonaziero.dsvendas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fonaziero.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{

}
