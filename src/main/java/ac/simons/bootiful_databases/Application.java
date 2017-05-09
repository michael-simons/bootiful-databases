package ac.simons.bootiful_databases;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class Application {

    @Configuration
    static class WebConfig extends WebMvcConfigurerAdapter {

        @Override
        public void addViewControllers(final ViewControllerRegistry registry) {
            registry.addViewController("/app/").setViewName("forward:/app/index.html");
        }
    }

    public static void main(String... args) {
        SpringApplication.run(Application.class, args);
    }
}
