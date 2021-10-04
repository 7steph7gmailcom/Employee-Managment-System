USE employee;

INSERT into role (title, salary, department_id) VALUES ("Regional Manager of Scranton", 100000, 1);
INSERT into role (title, salary, department_id) VALUES ("Sales Representative", 75000, 2); 
INSERT into role (title, salary, department_id) VALUES ("Sales Representative2", 65000, 2);
INSERT into role (title, salary, department_id) VALUES ("Accountant", 85000, 3);
INSERT into role (title, salary, department_id) VALUES ("Accountant2", 65000, 3);
INSERT into role (title, salary, department_id) VALUES ("Accountant3", 30000, 3);
INSERT into role (title, salary, department_id) VALUES ("Quality Assurance", 48000, 4);
INSERT into role (title, salary, department_id) VALUES ("Supplier Relations", 42000, 5);
INSERT into role (title, salary, department_id) VALUES ("Customer Service Rep", 38000, 5);
INSERT into role (title, salary, department_id) VALUES ("Temp", 25000, 6);
INSERT into role (title, salary, department_id) VALUES ("Chief Financial Officer", 350000, 7);
INSERT into role (title, salary, department_id) VALUES ("Human Resources Rep1", 65000, 7);
INSERT into role (title, salary, department_id) VALUES ("Human Resources Rep2", 65000, 7);
INSERT into role (title, salary, department_id) VALUES ("Receptionist", 34000, 8);
INSERT into role (title, salary, department_id) VALUES ("Warehouse Forman", 49000, 9);


INSERT into department (name) VALUES ("Regional Manager");
INSERT into department (name) VALUES ("Sales");
INSERT into department (name) VALUES ("Accounting");
INSERT into department (name) VALUES ("QA");
INSERT into department (name) VALUES ("Product Oversight");
INSERT into department (name) VALUES ("Temp");
INSERT into department (name) VALUES ("Corporate and Human Resources");
INSERT into department (name) VALUES ("Reception");
INSERT into department (name) VALUES ("Warehouse");


INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Michael", "Scott", 1, 11);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Dwight", "Schrute", 2, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Jim", "Halpert", 3, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Oscar", "Martinez", 4, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Angela", "Kinsey", 5, 4);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Kevin", "Malone", 6, 4);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Creed", "Bratton", 7, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Meredith", "Palmer", 8, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Kelly", "Kapoor", 9, 10);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Ryan", "Howard", 10, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("David", "Wallace", 11, NULL);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Toby", "Flenderson", 12, 11);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Holly", "Flax", 13, 11);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Pam", "Beasley", 14, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Darryl", "Philbin", 15, NULL);