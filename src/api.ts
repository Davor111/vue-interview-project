import { faker } from '@faker-js/faker'


export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export function createRandomCompany() {
  return {
    companyId: faker.string.uuid(),
    companyName: faker.internet.domainName(),
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 15,
});

export const COMPANIES = faker.helpers.multiple(createRandomCompany, {
  count: 15,
});