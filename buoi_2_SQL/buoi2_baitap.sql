-- bai1: tuổi lớn hơn 20 và sắp xếp tăng dần 
SELECT *
FROM `authors`
WHERE age > 20
ORDER BY age ASC 


--bai2: chọn ra author có first_name bắt đầu bằng "H" và bé hơn 80 tuổi
SELECT *
FROM `authors`
WHERE first_name LIKE "H%"
    AND age < 80 
    
    
--Bài 3: Chọn ra tất cả những tác giả có giới tính là nữ ( bit 0 ) có độ tuổi nhỏ hơn 50
SELECT *
FROM `authors`
WHERE age < 50
    AND id in (
        SELECT author_id
        FROM profiles
        WHERE gender = 0
    )

-- Bài 4: Chọn ra tất cả những quyển sách được viết bởi tác giả là nam với ngày trả trước tháng 4 năm 2021 (kiểu dữ liệu thời gian thuộc format YYYY-MM-DD hh:mm:ss)
SELECT * FROM `books` 
WHERE return_date < '2021-04-01' 
    AND author_id in ( 
        SELECT author_id 
        FROM profiles 
        WHERE gender = 1 
    )

--Bài 5: Chọn ra tất cả những quyển sách thuộc hai tên category là Physic và Chemistry với tác giả là nam và không quá 50 tuổi

SELECT *
FROM books

JOIN books_categories bc1 
ON bc1.book_id  = books.id
-- chọn toàn bộ fields của table books join với table books_categories(bc1) lấy book_id làm chuẩn 

JOIN books_categories bc2
ON bc2.book_id = books.id
-- sau đó join với table books_categories(bc2) lấy book_id làm chuẩn 

	JOIN profiles
	ON books.author_id = profiles.author_id
    AND profiles.gender = 1
    --join với table profile để lấy gender là nam
    -- tới đây đã lọc ra được các cuốn sách mà author có gender là nam

    JOIN authors
    ON books.author_id = authors.id
	AND authors.age <= 50
    --join với table author để lọc ra những author có tuổi <= 50
    --vì field age chỉ có trong table authors nên mới join thêm table authors

WHERE bc1.category_id = 5
AND bc2.category_id  = 6

--sau khi lọc các cuốn sách có author là nam và age <= 50 thì giờ lọc ra các cuốn sách có 2 category như đề bài


--Bài 6: Hãy đếm số lượng sách có trong từng category hiện có
SELECT category_id, COUNT(*) AS 'count'
FROM books_categories 
WHERE category_id IN ('1', '2', '3','4','5','6')
GROUP BY category_id


--Bài 7: Tạo mới một tác giả cùng với profile của họ

INSERT INTO authors (first_name, last_name, age)
VALUES ("duchuy", "nguyen huu", "20");

INSERT INTO profiles (author_id,email,gender) 
VALUES (LAST_INSERT_ID(), 'abc@email.com',1) 

--Bài 8: Tạo mới 5 quyển sách của tác giả đấy thuộc cả 6 category
INSERT INTO books (title, description, author_id)
VALUES 
    ("book1" , "description of book1", (SELECT id FROM authors ORDER BY id DESC LIMIT 1)),
    ("book2" , "description of book2", (SELECT id FROM authors ORDER BY id DESC LIMIT 1)),
    ("book3" , "description of book3", (SELECT id FROM authors ORDER BY id DESC LIMIT 1)),
    ("book4" , "description of book4", (SELECT id FROM authors ORDER BY id DESC LIMIT 1)),
    ("book5" , "description of book5", (SELECT id FROM authors ORDER BY id DESC LIMIT 1));

INSERT INTO books_categories (category_id, book_id)
    VALUES 
    (1, (SELECT id from books WHERE title = "book1")),
    (3, (SELECT id from books WHERE title = "book1")),

    (5, (SELECT id from books WHERE title = "book2")),
    (6, (SELECT id from books WHERE title = "book2")),
    
    (4, (SELECT id from books WHERE title = "book3")),

    (2, (SELECT id from books WHERE title = "book4")),

    (5, (SELECT id from books WHERE title = "book4")),
    
    (6, (SELECT id from books WHERE title = "book5"));

--Bài 9: Xoá đi cuốn sách của tác giả trên ở category Science và Physic
    delete from books 
    WHERE book.author_id = (SELECT id from authors WHERE authors.first_name = "duchuy")
    AND id in (SELECT book_id from books_categories 
        WHERE category_id = 5 or category_id = 6)

--Bài 10: Cập nhật title của các quyển sách của tác giả trên thành "Empty title"
    update books
    Set title = "Empty title"
    WHERE author_id = (SELECT id from authors WHERE authors.first_name = "duchuy")
