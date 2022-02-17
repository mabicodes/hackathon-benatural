package net.javaguides.springboot.benatural.model;

import javax.persistence.Column;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    @Column(name = "product_list") // lo usaremos pra hacer catálogo de productos
    private String productName;
    private String productDescription;
    private String productCategory;
    private double productPrice;

    public Product(String productName, String productDescription, String productCategory, double productPrice){
        this.productName = productName;
        this.productDescription = productDescription;
        this.productCategory = productCategory;
        this.productPrice = productPrice;
    }
}
public Product(){
}
public Long getId() { return id; }