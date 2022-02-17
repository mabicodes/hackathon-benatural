package net.javaguides.springboot.benatural.model;
<<<<<<< HEAD
=======
import java.util.Set;
>>>>>>> 5d52a2beb8828cedc5396f854b7da9f87dee5b86

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
    private String productName;
    private String productDescription;
    private String productCategory;
    private String productPrice;
<<<<<<< HEAD

    public Product(String productName, String productDescription, String productCategory, String productPrice){
=======
    private String productImg;
    public Product(String productName, String productDescription, String productCategory, String productPrice, String productImg){
>>>>>>> 5d52a2beb8828cedc5396f854b7da9f87dee5b86
        this.productName = productName;
        this.productDescription = productDescription;
        this.productCategory = productCategory;
        this.productPrice = productPrice;
        this.productImg = productImg;
    }
   
    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

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

    public String getProductImg() {
        return productImg;
    }
    public void setProductImg(String productImg) {
        this.productImg = productImg;
    }


    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", productDescription='" + productDescription + '\'' +
                ", productCategory='" + productCategory + '\'' +
                ", productPrice=" + productPrice  + '\'' +
                '}';
    }


   

}