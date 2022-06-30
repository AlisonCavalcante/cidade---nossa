package org.acme.Entidades;
import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name = "usuarios")
public class Usuario extends PanacheEntity  {
    
   public String nome;
   public String email;
   public String senha;
   
    
}
