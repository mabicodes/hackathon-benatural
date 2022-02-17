package net.javaguides.springboot.benatural.model;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name= "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // lo usaremos pra hacer el catálogo de productos 
    private String productName;
    private String productDescription;
    private String productCategory;
    private String productPrice;
    public Product(String productName, String productDescription, String productCategory, String productPrice){
        this.productName = productName;
        this.productDescription = productDescription;
        this.productCategory = productCategory;
        this.productPrice = productPrice;
    }
    public Product(){}
    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}
     //getters setters de los productos

    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    } 
    public String getProductDescription() {
        return productDescription;
    }
    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }
    public String getProductCategory(){
        return productCategory;
    }
    public void setProductCategory(String productCategory){
        this.productCategory = productCategory;
    }
    public String getProductPrice(){
        return productPrice;
    }
    public void setProductPrice(String productPrice){
        this.productPrice = productPrice;
    }
}