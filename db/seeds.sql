INSERT INTO departments (name)
VALUES
('Executive'),
('Budgets'),
('Personnel'),
('Legal'),
('Contracts');

INSERT INTO  roles (job_title, salary, dept_id)
VALUES
('Director', 350000, 1),
('Budget Chief', 250000, 2),
('Hiring Manager', 150000, 3),
('Lawyer', 175000, 4),
('Procurement Chief', 250000, 5),
('Analyst 1', 100000, 2),
('Office Tech', 100000, 1),
('Contract Analyst', 100000, 5),
('Intern', 60000, 3);

INSERT INTO  employees (first_name, last_name, role_id, manager_id)
VALUES
('Macy', 'Mannix', 1, NULL),
('Sharon', 'Needles', 2, 1),
('Ru', 'Paul', 3, 1),
('Alyssa', 'Edwards', 4, 1),
('Nicky', 'Hilton', 5, 1),
('Alaska', 'Ball', 6, 2),
('Jeff', 'Probst', 7, 4),
('Teal', 'Swan', 8, 5),
('Santino', 'Rice', 9, 3),
('John', 'Early', 9, 2),
('Bobby', 'Finger', 9, 5),
('Lindsay', 'Weber', 9, 2),
('Gordon', 'Tan', 9, 3);