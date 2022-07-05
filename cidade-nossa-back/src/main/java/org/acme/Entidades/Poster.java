package org.acme.Entidades;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Poster extends PanacheEntity {

    public String titulo;
    public String descricao;
    public String hashtags;
    public int likes;
    public boolean isAberto;
    public String categoria;
    
    @CreationTimestamp
    public Date dataCriacao;

    @OneToMany(mappedBy = "poster", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Comentario> comentarios;

    @ManyToOne
    public Usuario usuario;
}

