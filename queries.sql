-- Database Queries

-- Find all customers with postal code 1010
SELECT 
* FROM Customers
WHERE PostalCode = 1010
-- Find the phone number for the supplier with the id 
SELECT Phone
FROM Suppliers
WHERE SupplierID = 11

-- List first 10 orders placed, sorted descending by the order date
This shows the first 10 orders found in the database searching sequentially by somekey other than OrderID it returns the OrderIDs out of sequence

43 42 40 41 39 38 36 37 35 33 
SELECT *
FROM Orders
ORDER BY OrderDate DESC
LIMIT 10

This returns the same first 10 orders only  sequentially by OrderID and OrderDate
SELECT *
FROM Orders
ORDER BY OrderID DESC
LIMIT 10
-- Find all customers that live in London, Madrid, or Brazil
SELECT * FROM Customers
WHERE 
City = 'London'OR City='Madrid' OR Country = 'Brazil'
-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT 
INTO [Customers] (ContactName,Address,City,PostalCode,Country,CustomerName)
VALUES ('Bilbo Baggins','1 Hobbit-Hole','Bag End','111','Middle Earth','The Shire')
-- Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE Customers
SET PostalCode=11122 
WHERE ContactName = 'Bilbo Baggins'
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
SELECT COUNT(City) FROM Customers  
-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT * 
FROM Suppliers
WHERE length(SupplierName)> 20
