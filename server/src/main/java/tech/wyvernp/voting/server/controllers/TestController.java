package tech.wyvernp.voting.server.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.annotation.RequestScope;

@RestController
@RequestMapping(path = "/api/v1")
public class TestController {
    @GetMapping("/")
    public String firstCome() {
        return "Helllo";
    }
}
