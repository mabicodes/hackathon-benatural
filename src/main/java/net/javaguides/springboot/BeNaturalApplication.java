package net.javaguides.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import net.javaguides.springboot.benatural.model.Product;
import net.javaguides.springboot.benatural.repository.ProductRepository;

@SpringBootApplication
public class BeNaturalApplication {
	public static void main(String[] args) {
		ConfigurableApplicationContext configurableApplicationContext =
		SpringApplication.run(BeNaturalApplication.class, args);
		ProductRepository productRepository =
		configurableApplicationContext.getBean(ProductRepository.class)
	}
}
