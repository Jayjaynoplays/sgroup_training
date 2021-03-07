-- CREATE DATABASE
CREATE DATABASE bookstore;
-- CREATE author tableP
CREATE TABLE authors (
  id int not null AUTO_INCREMENT,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  age VARCHAR(255),
  primary key (id)
);
-- CREATE book table
CREATE TABLE books (
  id int not null AUTO_INCREMENT,
  title VARCHAR(255),
  description varchar(255),
  author_id int,
  return_date DATETIME,
  primary key (id),
  foreign key (author_id) REFERENCES authors(id)
);
-- CREATE profile
CREATE TABLE profiles (
  id int not null AUTO_INCREMENT,
  email VARCHAR(255),
  gender BIT,
  author_id int,
  primary key (id),
  foreign key (author_id) REFERENCES authors(id),
  UNIQUE (author_id)
);

-- CREATE category
CREATE TABLE categories (
  id int not null AUTO_INCREMENT,
  name VARCHAR(255),
  primary key (id)
);
-- CREATE pivot category and book table
CREATE TABLE books_categories (
  id int not null AUTO_INCREMENT,
  category_id int,
  book_id int,
  foreign key (category_id) REFERENCES categories(id),
  foreign key (book_id) REFERENCES books(id) ON DELETE CASCADE,
  primary key (id)
);
