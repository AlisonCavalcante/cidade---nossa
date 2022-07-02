package org.acme.Entidades;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Comentario extends PanacheEntity {

    public String comentario;

    @ManyToOne
    public Poster poster;

    @ManyToOne
    public Usuario usuario;
}
