INSERT INTO department (name)
VALUES
('Executive'),
('Budgets'),
('Personnel'),
('Legal'),
('Contracts');

INSERT INTO  role (title, salary, department_id)
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

INSERT INTO  employee (first_name, last_name, role_id, manager_id)
VALUES
('Macy Mannix', 1, null),
('Sharon Needles', 2, 1),
('Ru Paul', 3, 1),
('Alyssa Edwards', 4, 1),
('Nicky Hilton', 5, 1),
('Alaska Ball', 6, 2),
('Jeff Probst', 7, 4),
('Teal Swan', 8, 5),
('Santino Rice', 9, 3),
('John Early', 10, 2),
('Bobby Finger', 11, 5),
('Lindsay Weber', 12, 2),
('Gordon Tan', 13, 3);