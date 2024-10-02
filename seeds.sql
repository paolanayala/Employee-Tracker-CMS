INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  (501, 'Rita', 'Lore', 'Office Manager'), --Admin
        (303, 'Brian', 'Griffin', 'Forensic Accountant', 301), --finance
        (603, 'Rory', 'Gaston', 'Product Manager', 601), --engineering
        (601, 'Patty', 'Cake', 'Lead Developer'), --engineering
        (402, 'Tom', 'Haverford', 'Salesperson', 401), --sales
        (401, 'Donna', 'Meagle', 'Sales Lead'), --sales
        (604, 'James', 'Bond', 'Software Architect', 601), --engineering
        (301, 'Hugh', 'Neutron', 'Senior Accountant'), --finance
        (201, 'Olivia', 'Pope', 'Lawyer'), --legal
        (101, 'Slim', 'Shady', 'CEO'), --executive
        (602, 'Captain', 'Falcon', 'Software Engineer', 601), --engineering
        (302, 'Sandy', 'Cheeks', 'Staff Accountant', 301), --finance
        (202, 'Leslie', 'Knope', 'Compliance Officer', 201); --legal

INSERT INTO roles (id, title, salary, department_id)
VALUES  (100, 'Executives', 1800000, 1),
        (200, 'Legal', 198000, 2),
        (300, 'Finance', 150000, 3),
        (400, 'Sales', 90000, 4),
        (500, 'Administrative', 75000, 5),
        (600, 'Engineering', 168000, 6);


INSERT INTO departments (id, department_name)
VALUES  (1, 'Executive'),
        (2, 'Legal'),
        (3, 'Finance'),
        (4, 'Sales'),
        (5, 'Administrative'),
        (6, 'Engineering');