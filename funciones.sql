create function FOrdersQuantityByYear(@Year int) returns int
begin
    declare @Quantity int
    set @Quantity = (select COUNT(OrderID)
                        from Orders
                        where YEAR(OrderDate) = @Year)
    return @Quantity
end
go

select dbo.FOrdersQuantityByYear(2016)
====================================================================>

Crear una función que retorne el nombre de la categoría con la mayor cantidad de ítems de productos
vendidos para un determinado año.

create function FCategoryWithMaxUnitsByYear(@Year int) returns table
return
select *
from VUnitsByCategoryByYear
where Year = @Year and Total = (select MAX(Total)
                                from VUnitsByCategoryByYear
                                where Year = @Year)
go

select * from dbo.FCategoryWithMaxUnitsByYear(2016)

====================================================================>

Crear una función que retorne la cantidad de órdenes atendidas para un determinado año

create function FOrdersQuantityByYear(@Year int) returns int
begin
   declare @Quantity int
   set @Quantity = (select COUNT(OrderID)
                      from Orders
                      where YEAR(OrderDate) = @Year)
   return @Quantity
end
go

select dbo.FOrdersQuantityByYear(2016)
go

====================================================================>

Crear una funcion que retorne el nombre de la categoria con la mayor cantidad de items
de productos vendidos para un determinado año

create view VUnitsByCategoryByYear
as
select C.CategoryID, CategoryName, Year(OrderDate) as Year, SUM(Quantity) as Total
form [Order Details] as OD
     join Products as P on OD.ProductID = P.ProductID
     join Categories as C on P.CategoryID = C.CategoryID
     join Orders as O on OD.OrderId = O.OrderID
group by C.CategoryID, CategoryName, Year(OrderDate)
go

create function FCategoryWithMaxUnitsByYear(@Year int) returns table
return
select *
from VUnitsByCategoryByYear
where Year = @Year and Total = (select MAX(Total) 
                                from VUnitsByCategoryByYear
                                where Year = @Year)
go

select * from dbo.FCategoryWithMaxUnitsByYear(2016)
====================================================================>
