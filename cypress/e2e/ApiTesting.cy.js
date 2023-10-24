/// <reference types= "cypress" />
describe('ApiTesting', () => {
const  RandomISBN = Math.floor(Math.random()*15550)
const RandomAISLE = Math.floor(Math.random()*17550)

const firstNames = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Frank',
  'Grace',
  'Helen',
  'Isaac',
  'Jack'
];

const lastNames = [
  'Smith',
  'Johnson',
  'Brown',
  'Taylor',
  'Williams',
  'Jones',
  'Davis',
  'Miller',
  'Wilson',
  'Moore'
];

 
  it('Test Post Method', () => {

    const requestBody = {
      name:"Qa private Zoom",
      isbn:RandomISBN,
      aisle:RandomAISLE,
      author:"Ahmad Mohammad"
      }

    cy.request({
      method : "POST",
      url:"https://rahulshettyacademy.com/Library/Addbook.php",
      body:requestBody
    }).then((Response)=>{
      cy.log(Response.body)
      expect(Response.status).to.eq(200)
      expect(Response.body.Msg).to.eq("successfully added")
    })
  })
  it('Test Get Method', () => {
    cy.request({
      method : "GET",
      url :`https://rahulshettyacademy.com/Library/GetBook.php?ID=${RandomISBN}${RandomAISLE}`,

    }).then((Response)=>{
      cy.log(Response.body[0].book_name)
      expect(Response.status).to.eq(200)
      expect(Response.body[0].author).to.eq("Ahmad Mohammad")

    })
    
  });
})