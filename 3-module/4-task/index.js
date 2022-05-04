function showSalary(users, age) {
  return users
    .filter(user => user.age <= age)
    .map(({ name, balance }) => {
      return `${name}, ${balance}`;
    }).join('\n');
}
