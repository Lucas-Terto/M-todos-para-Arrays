const data = [
    { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
    { name: "João", age: 18, sallary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
    { name: "Érica", age: 16, sallary: 0, driverLicense: false },
  ];

  //Reverse

  const reverseData = data.reverse()
  console.log(reverseData)


  //find
  const highSallary = 5000

  const higthestSallary = data.find((i) => i.sallary > highSallary)
  console.log(higthestSallary)

  //findIndex

  const lowestSallary = data.findIndex((i) => i.sallary > 0 && i.sallary < 2000)
  console.log(lowestSallary)

  data[lowestSallary].sallary += 200
  console.log(data)

  // includes
  //retona true para itens encontrados e false para não encontrados
  
  const numbers = [1, 2, 3, 4, 5];

  const hasFour = numbers.includes(4)
  console.log(hasFour)

  //map
  data.map((i) => i.newsletter = false)

  console.log(data)

  // filter
  const drivers = data.filter((i) => i.driverLicense === true)
  console.log(drivers)

  //reduce
  const sallariesSum = data.reduce(
    (totalSallary, i) => (totalSallary+=i.sallary), 0)

    console.log(sallariesSum)

  //forEach
  const showUsersNames = (users) => {
    users.forEach((user) => {
        console.log(`Olá ${user.name}`)
    })
  }
  showUsersNames(data)

  //some
  let someoneWithNewLatter = data.some((user) => user.newsletter)
  console.log(someoneWithNewLatter)

  //every
  const everyUserHasName = data.every((user) => user.name)
  console.log(everyUserHasName)

