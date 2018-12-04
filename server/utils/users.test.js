const expect = require('expect');

const {Users} = require ('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'ime1',
      room: 'soba1'
    }, {
      id: '2',
      name: 'ime2',
      room: 'soba2'
    }, {
      id: '3',
      name: 'ime3',
      room: 'soba1'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'ime',
      room: 'soba'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for soba1', () => {
     var userList = users.getUserList('soba1');

     expect(userList).toEqual(['ime1', 'ime3']);
  });

  it('should return names for soba2', () => {
     var userList = users.getUserList('soba2');

     expect(userList).toEqual(['ime2']);
  });

  it('should remove user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () =>{
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });
});
