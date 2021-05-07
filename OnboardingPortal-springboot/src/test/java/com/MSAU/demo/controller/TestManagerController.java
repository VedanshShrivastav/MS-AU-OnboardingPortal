package com.MSAU.demo.controller;


import java.util.ArrayList;
        import java.util.List;


import com.MSAU.demo.bean.Manager;
import com.MSAU.demo.repository.ManagerRepo;
import org.junit.jupiter.api.BeforeEach;
        import org.junit.jupiter.api.Test;
        import org.junit.jupiter.api.extension.ExtendWith;
        import org.mockito.InjectMocks;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
        import org.springframework.boot.test.mock.mockito.MockBean;
        import org.springframework.test.context.junit.jupiter.SpringExtension;
        import org.springframework.test.web.servlet.MockMvc;

        import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
        import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
        import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
        import static org.hamcrest.Matchers.*;
        import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = ManagerController.class)
public class TestManagerController {
    @InjectMocks
    ManagerController userController;

    @MockBean
    ManagerRepo userRespository;

    @Autowired
    private MockMvc mockMvc;

    List<Manager> list;
    List<Manager> singleResponse;

    String baseURL = "http://localhost:8080/Manager";

    @Test
    public void testGetAllCandidates() throws Exception{
        when(userRespository.getManager()).thenReturn(list);
        this.mockMvc.perform(get(baseURL ))
                .andExpect(status().isOk());
    }


}