package org.acme.Entidades;
import java.util.Date;

import javax.persistence.Entity;


import org.hibernate.annotations.CreationTimestamp;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Poster extends PanacheEntity {

    public String titulo;
    public String descricao;
    public String hashtags;
    public int likes;

    @CreationTimestamp
    public Date dataCriacao;

}

