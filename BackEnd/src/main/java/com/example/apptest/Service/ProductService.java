package com.example.apptest.Service;

import com.example.apptest.Model.Product;
import com.example.apptest.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
    public Product updateProduct(String name, Product product) {
        if (productRepository.existsById(name)) {
            return productRepository.save(product);
        }
        return null;

    }

    public void deleteProduct(String name) {
        productRepository.deleteById(name);
    }
    public Product getProductByName(String name) {
        return productRepository.findById(name).orElse(null);
    }



}
