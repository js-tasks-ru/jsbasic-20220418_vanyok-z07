function makeFriendsList(list) {
  const ul = document.createElement('ul');
  const lis = [];

  list.forEach(({ firstName, lastName }) => {
    lis.push(`<li>${firstName} ${lastName}</li>`);
  });

  ul.insertAdjacentHTML('beforeEnd', lis.join(''));
  return ul;
}
