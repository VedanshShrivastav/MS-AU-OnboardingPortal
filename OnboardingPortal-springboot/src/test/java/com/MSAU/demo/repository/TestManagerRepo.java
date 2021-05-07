package com.MSAU.demo.repository;

import com.MSAU.demo.bean.Manager;
import org.junit.jupiter.api.MethodOrderer;
        import org.junit.jupiter.api.Order;
        import org.junit.jupiter.api.Test;
        import org.junit.jupiter.api.TestMethodOrder;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.boot.test.context.SpringBootTest;

        import static org.junit.jupiter.api.Assertions.assertEquals;
        import static org.junit.jupiter.api.Assertions.assertNotNull;
        
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest
public class TestManagerRepo {
    @Autowired
    ManagerRepo userRespository =  new ManagerRepo();

    @Test
    @Order(1)
    public void TestgetManager()
    {
        assertEquals(4,userRespository.getManager().size());
    }
    @Test
    @Order(2)
    public void TestfindById()
    {
        assertEquals(1,userRespository.findByID(1).getID());
    }

}