package org.acme.DAO;

import java.math.BigDecimal;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.persistence.EntityManager;

import org.acme.Entidades.Poster;

@Singleton
public class PosterDao {

    @Inject
    private EntityManager entityManager;

    public List<Poster> findByCategoria(String categoria) {
        return entityManager.createQuery("SELECT p FROM Poster p WHERE p.categoria = :categoria  ", Poster.class)
                .setParameter("categoria", categoria).getResultList();
    }

    public Long countByCategoria(String categoria) {
        Long b = entityManager.createQuery("SELECT COUNT(*) FROM Poster p WHERE p.categoria = :categoria  ", Long.class)
                .setParameter("categoria", categoria).getSingleResult();
        System.out.println(b);
        return b;
    }

    public Poster findById(Long id){
        return Poster.findById(id);
    }

}
