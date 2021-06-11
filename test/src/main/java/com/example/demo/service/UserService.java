package com.example.demo.service;

import com.example.demo.dto.UserDTO;
import com.example.demo.entity.UserBO;
import com.example.demo.mapper.UserMapper;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserMapper userMapper;
    public List<UserDTO> findAll(){
        List<UserBO> bos = userRepository.findAll();
        return userMapper.toDto(bos);
    }

    public void updateUser(Integer id,double mark) {
        Optional<UserBO> bos = userRepository.findById(id);
        UserDTO userDTO =new UserDTO();
        UserBO bo = userMapper.toEntity(userDTO);
        if (bos.isPresent()) {
            bos.get().setMark(mark);
            userRepository.save(bos.get());
        }
    }
}
