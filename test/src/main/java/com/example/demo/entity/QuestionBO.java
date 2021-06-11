package com.example.demo.entity;

import com.example.demo.dto.QuestionDTO;

import javax.persistence.*;

@Entity
@Table(name = "tbl_question")
@SqlResultSetMapping(
        name = "mapping",
        classes = {
                @ConstructorResult(
                        targetClass = QuestionDTO.class,
                        columns = {
                                @ColumnResult(name = "ans_correct", type = int.class),
                        }
                )
        }
)
public class QuestionBO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_question")
    private Integer id;

    @Column(name = "text")
    private String text;

    @Column(name = "level")
    private char level;

    @Column(name = "ans_correct")
    private int ansCorrect;

    @Column(name = "id_user")
    private int idUser;


    public QuestionBO() {
    }

    public QuestionBO(Integer id, String text, char level, int ansCorrect, int idUser) {
        this.id = id;
        this.text = text;
        this.level = level;
        this.ansCorrect = ansCorrect;
        this.idUser = idUser;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public char getLevel() {
        return level;
    }

    public void setLevel(char level) {
        this.level = level;
    }

    public int getAnsCorrect() {
        return ansCorrect;
    }

    public void setAnsCorrect(int ansCorrect) {
        this.ansCorrect = ansCorrect;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }
}
