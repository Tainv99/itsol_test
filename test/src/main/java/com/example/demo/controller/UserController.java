package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping
    public ResponseEntity<List<UserDTO>> findAll(){
        List<UserDTO> reponse= userService.findAll();
        return ResponseEntity.ok(reponse);
    }
    @PutMapping("/{id}/{mark}")
    public String update(@PathVariable Integer id, @PathVariable double mark) {
        userService.updateUser(id,mark);
        return "sửa thành công";
    }
}
