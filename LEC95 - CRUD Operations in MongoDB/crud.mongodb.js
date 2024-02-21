use("CrudDB")
console.log(db)
db.createCollection("courses")

db.courses.insertOne({
    name: "harri veb dev",
    price: 0,
    assignments: 12,
    projects: 40
})

// C -> Create
db.courses.insertMany([
    [
        {
            "name": "lamvi veb dev",
            "price": 40,
            "assignments": 412,
            "projects": 410
        },
        {
            "name": "john smith",
            "price": 0,
            "assignments": 8,
            "projects": 30
        },
        {
            "name": "jane doe",
            "price": 0,
            "assignments": 15,
            "projects": 45
        },
        {
            "name": "alexander brown",
            "price": 0,
            "assignments": 10,
            "projects": 38
        },
        {
            "name": "sarah wilson",
            "price": 0,
            "assignments": 11,
            "projects": 42
        },
        {
            "name": "michael jackson",
            "price": 0,
            "assignments": 9,
            "projects": 36
        },
        {
            "name": "emily white",
            "price": 0,
            "assignments": 13,
            "projects": 39
        },
        {
            "name": "william green",
            "price": 0,
            "assignments": 7,
            "projects": 28
        },
        {
            "name": "olivia brown",
            "price": 0,
            "assignments": 14,
            "projects": 43
        },
        {
            "name": "daniel smith",
            "price": 0,
            "assignments": 10,
            "projects": 37
        }
    ]

])

// R -> Read
let a = db.courses.find({ price: 0 }) //with findone it will return the first document that matches the query
console.log(a.count()); //willr return the number of documents that match the query & with a.toarray() it will return the documents that match the query in an array

// U -> Update
db.courses.updateMany({price: 0}, {$set:{price: 100}})

// D -> Delete
db.courses.deleteMany({price:0})

//mongodb query and element operator check on documentation