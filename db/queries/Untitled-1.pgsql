SELECT u.id, u.first_name, u.last_name,u.username as email, r.role FROM users u
INNER JOIN roles r ON u.id = r.user_id