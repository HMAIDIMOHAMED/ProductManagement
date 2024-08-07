package com.example.apptest.Repository;

import com.example.apptest.Model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
  Admin findByUsername(String username);
}
