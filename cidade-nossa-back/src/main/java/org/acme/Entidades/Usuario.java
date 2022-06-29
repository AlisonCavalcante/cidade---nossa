package org.acme.Entidades;
import javax.persistence.Entity;
import javax.persistence.Id;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Usuario extends PanacheEntity  {
    
   public String nome;
   public String email;
   public String senha;
   
    
}
