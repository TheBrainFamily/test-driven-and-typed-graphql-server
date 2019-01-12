const allTypes = ['comment',
'user',
'teacher',
'course',
'class',
'school',
'section',
'grade',
'achievement']

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

allTypes.forEach((t) => {console.log(`
${t}sFindAll: [${capitalizeFirstLetter(t)}!]
${t}FindById(id: ID!): ${capitalizeFirstLetter(t)}
${t}FindByName(name: String!): ${capitalizeFirstLetter(t)}`)
})


allTypes.forEach((t) => {console.log(`
${t}Add(name: String!): ${capitalizeFirstLetter(t)}
${t}RemoveById(id: ID!): ID
${t}RemoveByName(name: String): ID
  `)
})

allTypes.forEach((t) => {console.log(`
type ${capitalizeFirstLetter(t)} {
  id: ID!
  name: String!
}`)
})
