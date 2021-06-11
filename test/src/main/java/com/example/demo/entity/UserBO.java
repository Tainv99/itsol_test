package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name = "tbl_user")
public class UserBO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Integer id;
    @Column(name = "username")
    private String userName;
    @Column(name = "password_hash")
    private String passwordHash;
    @Column(name = "role")
    private String role;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "mark")
    private double mark;

    public UserBO() {
    }

    public UserBO(Integer id, String userName, String passwordHash, String role, String firstName, String lastName, String email, double mark) {
        this.id = id;
        this.userName = userName;
        this.passwordHash = passwordHash;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mark = mark;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public double getMark() {
        return mark;
    }

    public void setMark(double mark) {
        this.mark = mark;
    }
}
