
_id
683da42396616d39e4c9147b
title
"slave"
author
"lostbambi"
genre
"fantasy"
published_year
2007
price
1500
in_stock
true
pages
300
publisher
"kasuku"
_id
683daa5edf5ad563076c4bd0
title
"java"
author
"kea"
genre
"fiction"
published_year
2011
price
400
in_stock
false
pages
120
publisher
"longhorn"
_id
683fd575e3bb7495136c4bd0
title
"BoraBora"
author
"silvia"
genre
"Biography"
published_year
2022
price
500
in_stock
false
pages
120
publisher
"Bear lake"

//insert
plp_bookstore> db.books.insertOne({title:"BoraBora",author:"silvia",genre:"Biography",published_year:2022,price:350,in_stock:false,pages:120,publisher:"Bear lake"    });
{
  acknowledged: true,
  insertedId: ObjectId('683fd575e3bb7495136c4bd0')
}
//update
plp_bookstore> db.books.updateMany({price:350},{$set:{price:500}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
//delete
plp_bookstore> db.books.deleteMany({pages:"120"});
{ acknowledged: true, deletedCount: 0 }
plp_bookstore>
