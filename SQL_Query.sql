SELECT
  p.id
  p.title
  p.description
  ps.name
  c.name
FROM
  Post p
JOIN
  PostState ps 
  ON p.post_state_id == ps.id
JOIN
  Comunee co 
  ON p.comunee_id == co.id
JOIN
  Region r 
  ON co.region_id == r.id
JOIN
  Country c 
  ON r.country_id == c.id